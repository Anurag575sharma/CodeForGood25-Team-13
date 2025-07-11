import express from "express";
import {login, register, logout} from "../controllers/authController.js";

const router = express.Router();
router.post("/login", login);
router.post("/signup", register);
router.post("/logout", logout);
export default router;
