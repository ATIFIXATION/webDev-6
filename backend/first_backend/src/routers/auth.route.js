import express from "express";
import {
  registeruser,
  loginuser,
  logoutuser,
} from "../controllers/auth.controller.js";

import {
  sampleMiddleWare,
  samplMiddleWare2,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register",sampleMiddleWare,samplMiddleWare2, registeruser);
router.post("/login", samplMiddleWare2,loginuser);
router.post("/logout",sampleMiddleWare, logoutuser);

export default router;
