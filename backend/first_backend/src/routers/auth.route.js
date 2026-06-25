import express from "express";
import {
  registeruser,
  loginuser,
  logoutuser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registeruser);
router.post("/login", loginuser);
router.post("/logout", logoutuser);

export default router;