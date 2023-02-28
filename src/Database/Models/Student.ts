import { Document, model, Schema } from "mongoose";

enum blood_group_type {
    "O+" = "O+",
    "O-" = "O-",
    "A+" = "A+",
    "B+" = "B+",
    "B-" = "B-",
    "AB+" = "AB+",
    "AB-" = "AB-",
}
export interface IStudent extends Document {
    name: string;
    id: number;
    section: string;
    address: string;
    blood_group: string;
}

const studentSchema = new Schema<IStudent>({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: "number",
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    blood_group: {
        type: String,
        enum: Object.values(blood_group_type),
    },
});

export const Student = model<IStudent>("Student", studentSchema);
