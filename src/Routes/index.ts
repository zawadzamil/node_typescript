import { Router } from "express";
import { studentRouters } from "./studentRoutes";
import { userRoutes } from "./userRoutes";

export const router = Router();

router.use("/user", userRoutes);
router.use("/student", studentRouters);
