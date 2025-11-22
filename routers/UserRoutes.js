import * as UserController from '../controllers/UserController.js';
import express from "express"

const UserRoutes = express.Router();

UserRoutes.post('/new', UserController.register);
UserRoutes.post('/login', UserController.signIn);

// UserRoutes.get('/all', UserController.fetchUser);
// UserRoutes.post('/new', UserController.createUser);
// UserRoutes.put('/edit/:UserId', UserController.editUser);
// UserRoutes.delete('/delete/:UserId', UserController.deleteUser);

export default UserRoutes;