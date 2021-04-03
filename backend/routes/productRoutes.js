import express from "express";
const router = express.Router();
import {
  getPorductById,
  getProduct,
} from "../Controllers/productControllers.js";

router.route("/").get(getProduct);
router.route("/:id").get(getPorductById);
export default router;
