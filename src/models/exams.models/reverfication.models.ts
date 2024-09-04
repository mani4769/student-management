import mongoose, { Document, Schema } from 'mongoose';

// Define the schema for Reverification
interface IReverification extends Document {
    studentId: number;
    examId: number;
    requestDate: Date;
    status: 'Pending' | 'Approved' | 'Rejected';
    remarks?: string;
    type: 'Reverification';
}

const reverificationSchema = new Schema<IReverification>({
    studentId: { type: Number, required: true },
    examId: { type: Number, required: true },
    requestDate: { type: Date, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending', 
        required: true 
    },
    remarks: { type: String },
    type: { type: String, default: 'Reverification' } 
}, { timestamps: true, collection: 'exams' });

export const ReverificationModel = mongoose.model<IReverification>('Reverification', reverificationSchema);
