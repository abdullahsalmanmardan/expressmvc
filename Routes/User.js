import express from "express";
const userRouter = express.Router();

import {
  GetAllUser,
  GetUser,
  UpdateUser,
  DeleteUser,
} from "../Controller/User";

userRouter.get("/all", GetAllUser);
userRouter.get("/userId/:id", GetUser);
userRouter.put("/all", UpdateUser);
userRouter.get("/:id", DeleteUser);

module.exports = userRouter;
