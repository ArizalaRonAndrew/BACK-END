import jwt from 'jsonwebtoken';
import * as UserModel from '../models/UserModel.js';

const authHandler = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            success: false,
            message: [{ result: 'You do not have permission to access the app' }]
        });
    }

    // Expecting: "Bearer <token>"
    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, process.env.SECRET);

        // Fetch user -> optional but good practice
        const [user] = await UserModel.getUsers(id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: [{ result: 'User not found' }]
            });
        }

        // Attach user to req so other routes can use it
        req.user = user;

        next();
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: [{ result: 'Invalid or expired token' }]
        });
    }
};

export default authHandler;
