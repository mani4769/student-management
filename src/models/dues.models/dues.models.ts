import mongoose, { Document, Schema } from 'mongoose';

const duesSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    originalAmount: { type: Number, required: true },
    amountDue: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Overdue'], default: 'Pending' },
    paidDate: { type: Date },
    penalties: { type: Number, default: 0 },
    paymentMethod: { type: String, enum: ['Cash', 'Credit Card', 'Bank Transfer', 'Online Payment'], default: 'Online Payment' }
}, { timestamps: true });

export interface IDues extends Document {
    studentId: mongoose.Schema.Types.ObjectId;
    originalAmount: number;
    amountDue: number;
    dueDate: Date;
    paymentStatus: 'Pending' | 'Paid' | 'Overdue';
    paidDate?: Date;
    penalties: number;
    paymentMethod: 'Cash' | 'Credit Card' | 'Bank Transfer' | 'Online Payment';
}

const Dues = mongoose.model<IDues>('Dues', duesSchema);

export default Dues;
