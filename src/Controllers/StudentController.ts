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
    const { name, id, section, address, blood_group } = req.body;
    try {
        const student: IStudent = await Student.create({
            name,
            id,
            section,
            address,
            blood_group,
        });
        res.send({ message: "Student created", data: student });
    } catch (err: any) {
        res.status(400).send({ message: err.message });
    }
};
