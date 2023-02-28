import { NextFunction, Request, Response } from "express";
import { IUser, User } from "../Database/Models/User";

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.query.id;
    const user: IUser | null = await User.findById(id);
    if (!user) {
        res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ data: user });
};

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, password } = req.body;

    const user: IUser = await User.create({ name, email, password });

    res.status(200).send({ message: "User created successfully", data: user });
};

export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user: IUser | null = await User.findByIdAndUpdate(
        req.query.id,
        req.body,
        { new: true }
    );
    if (!user) {
        res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User updated successfully", data: "data" });
};

export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user: IUser | null = await User.findByIdAndDelete(req.query.id, {
        new: true,
    });
    if (!user) {
        res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully" });
};
