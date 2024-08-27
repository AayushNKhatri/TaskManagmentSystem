import { Router } from "express";
import{
    addUser, updateUser, getUser, deleteUser,
    loginUser,changePassword
}from "../controllers/User.controller.js"
const router = Router();
router.post("/Register", addUser)
router.put("/UpdateProfile/:id" ,updateUser)
router.get("/ViewProfile/:id", getUser)
router.delete("/DeleteUser/:id",deleteUser)
router.post("/Login", loginUser)
router.put("/ChangePassword/:id", changePassword)
export default router;