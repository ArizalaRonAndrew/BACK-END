import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  const {name, email, password} = req.body;

    try {
        const newUser = await UserModel.createUser(name, email, password);
        res.status(201).json({
            success: true,
             message: [
                {result: "A new account has been created!"},
             ]});
            }catch (e) {
            console.log(e);
            res.status(500).json({success: false, message: "Internal Server Error" })
         }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await UserModel.signIn(email, password);
        res.status(200).json({
            success: true,
            message: [ "Sign in successful!", token ]
        });
    } catch (e) {
        console.log(e);
        res.status(e.statusCode || 500).json({ success: false, message: e.message || "Internal Server Error" });
    }
}

// export const fetchUser = async (req, res) =>{
//     try{
//         const users = await UserModel.getUsers();
//         res.status(200).json({success: true, message: users});
//     }catch(e){
//         console.log(e);
//         res.status(500).json({
//             sucess: false,
//             message: "Internal Server Error"
//         })
//     }
    
// }

// export const registerUser = async (req, res) => {
//   const {name, email, password} = req.body;
//   try {
//     const userId = await UserModel.registerUser(name, email, password);
//     res.status(200).json({success: true, message: userId}) 
//     }catch (e){
//       console.log(e);
//       res.status(500).json({success: false, message: "Internal Server Error" })
//   }
// }

// export const editUser = async (req, res) => {
//   const {name, email, password} = req.body;
//   const {userID} = req.params;

//   try {
//     const updatedId = await UserModel.updateUser(name, email, password, userID);
//     res.status(200).json({success: true, message: updatedId}) 
//     }catch(e){
//       console.log(e);
//       res.status(500).json({success: false, message: "Internal Server Error" })
//   }
// }

// export const deleteUser = async (req, res) => {
//   const {userID} = req.params;

//   try {
//     const deletedId = await UserModel.deleteUser(userID);
//     res.status(200).json({success: true, message: deletedId}) 
//     }catch(e){
//       console.log(e);
//       res.status(500).json({success: false, message: "Internal Server Error" })
//   }
// }