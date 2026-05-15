import express from "express"
import { getDashboard, loginUser, registerUser } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get("/dashboard", protectRoute,getDashboard)

export default router;