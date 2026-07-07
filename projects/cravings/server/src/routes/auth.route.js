import express from "express";
import {
  RegisterUser,
  LoginUser,
  LogoutUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Register
router.post("/register", RegisterUser);

// Login
router.post("/login", LoginUser);

// Logout
router.post("/logout", LogoutUser);

export default router;