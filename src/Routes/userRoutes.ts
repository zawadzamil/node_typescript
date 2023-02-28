import express from "express";
import * as UserController from "../Controllers/UserController";
export const userRoutes = express.Router();

userRoutes.get("/", UserController.getUser);

userRoutes.post("/", UserController.createUser);

userRoutes.put("/", UserController.updateUser);

userRoutes.delete("/", UserController.deleteUser);
