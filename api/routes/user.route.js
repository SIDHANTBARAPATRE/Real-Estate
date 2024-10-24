import express from "express";
import { deleteUser, getUser, getUserListings, test, updateUser } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { signOut } from "../controller/auth.controller.js";
const router = express.Router();

router.get("/test", test); //test
router.post("/update/:id",verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get('/:id', verifyToken, getUser);

export default router;