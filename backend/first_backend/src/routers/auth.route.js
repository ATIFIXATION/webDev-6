import express from "express";
import { contactUs } from "../controllers/public.controller.js";

const router = express.Router();

router.get("/contact", contactUs);

export default router;