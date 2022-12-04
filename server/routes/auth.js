import express from "express";
import { signup, signin } from "./../controllers/auth.js";

const router = express.Router();

//User create
router.post("/signup", signup);

// sign in
router.post("/signin", signin);

// google Auth
router.post("/google");

export default router;
