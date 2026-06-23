import express from 'express';
import{contactUs} from '../controllers/public.controller.js';
const router = express.Router();

router.post("/contact-us", contactUs);

export default router;











