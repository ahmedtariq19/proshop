import express from "express";
import { protect, admin } from "../middleWare/authMiddleware.js";
const router = express.Router();
import {
  getPorductById,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../Controllers/productControllers.js";

router.route("/").get(getProduct).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getPorductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
