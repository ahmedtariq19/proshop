import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
// @ GET api/products
export const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @ GET api/products/id
export const getPorductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
