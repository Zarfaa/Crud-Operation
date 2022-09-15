import { Router } from "express";
import signupController from "../controller/auth/signup";
import loginController from "../controller/auth/login";
import RefreshController from "../controller/auth/refreshToken"
const router = Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/refreshToken", RefreshController);

export default router;