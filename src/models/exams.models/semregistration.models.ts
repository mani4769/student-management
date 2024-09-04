import mongoose, { Document, Schema } from 'mongoose';

interface ISemRegistration extends Document {
    studentId: number;
    semester: number;
    registrationDate: Date;
    courses: number[];
    type: 'SemRegistration';
}

const semRegistrationSchema = new Schema<ISemRegistration>({
    studentId: { type: Number, required: true },
    semester: { type: Number, required: true },
    registrationDate: { type: Date, required: true },
    courses: { type: [Number], required: true },
    type: { type: String, default: 'SemRegistration' } // Add a type field to distinguish the document type
}, { timestamps: true, collection: 'exams' });

export const SemRegistrationModel = mongoose.model<ISemRegistration>('SemRegistration', semRegistrationSchema);
