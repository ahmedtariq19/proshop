import express from "express";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();
import {
  userAuth,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../Controllers/userControllers.js";
router.route("/").post(registerUser);
router.post("/login", userAuth);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
export default router;
