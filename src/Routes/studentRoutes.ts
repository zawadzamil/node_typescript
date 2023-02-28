import express from "express";
import * as StudentController from "../Controllers/StudentController";

export const studentRouters = express.Router();

studentRouters.get("/", StudentController.get);
studentRouters.post("/", StudentController.create);
