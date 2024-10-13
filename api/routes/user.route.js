import express from "express";
import { test } from "../controller/user.controller.js";
const router = express.Router();

router.get("/test", test); //test

export default router;