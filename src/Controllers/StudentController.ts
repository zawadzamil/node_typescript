import { NextFunction, Request, Response } from "express";
import { IStudent, Student } from "../Database/Models/Student";

export const get = async (req: Request, res: Response, next: NextFunction) => {
    const student: IStudent | null = await Student.findById(req.query.id);
    student ?? res.status(404).send({ message: "Student not found." });
    res.send({ data: student });
};

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const student: IStudent = await new Student(req.body);
    res.send({ message: "Student created", data: student });
};
