import express from "express";
import { protect, admin } from "../middleWare/authMiddleware.js";
const router = express.Router();
import {
  userAuth,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../Controllers/userControllers.js";
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", userAuth);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
