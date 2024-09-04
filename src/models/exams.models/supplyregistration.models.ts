import mongoose, { Document, Schema } from 'mongoose';

interface IRegistration extends Document {
    studentId: number;
    examId: number;
    registrationDate: Date;
    isRegistered: boolean;
    type: 'Registration';
}

const registrationSchema = new Schema<IRegistration>({
    studentId: { type: Number, required: true },
    examId: { type: Number, required: true },
    registrationDate: { type: Date, required: true },
    isRegistered: { type: Boolean, required: true },
    type: { type: String, default: 'Registration' } // Add a type field to distinguish the document type
}, { timestamps: true, collection: 'exams' });

export const RegistrationModel = mongoose.model<IRegistration>('Registration', registrationSchema);