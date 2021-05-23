import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_TOKEN);

      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      throw new Error("Not authroized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Unauthorized access, no token");
  }
});
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Unauthorized as an admin");
  }
};
