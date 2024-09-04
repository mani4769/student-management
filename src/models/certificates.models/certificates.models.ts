import mongoose, { Document, Schema } from 'mongoose';


const certificateRequestSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    certificateType: { type: String, enum: ['Bonafide', 'Transfer', 'Conduct', 'Course Completion', 'Others'], required: true },
    requestDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    approvalDate: { type: Date },
    remarks: { type: String },
    type: { type: String, default: 'CertificateRequest' } 
}, { timestamps: true });

const certificateSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    certificateType: { type: String, enum: ['Bonafide', 'Transfer', 'Conduct', 'Course Completion', 'Others'], required: true },
    issueDate: { type: Date, default: Date.now },
    certificateFile: { type: String, required: true },
    issuedBy: { type: String, required: true },
    type: { type: String, default: 'Certificate' } 
}, { timestamps: true });

// Interface for CertificateRequest
export interface ICertificateRequest extends Document {
    studentId: mongoose.Schema.Types.ObjectId;
    certificateType: 'Bonafide' | 'Transfer' | 'Conduct' | 'Course Completion' | 'Others';
    requestDate: Date;
    status: 'Pending' | 'Approved' | 'Rejected';
    approvalDate?: Date;
    remarks?: string;
    type: 'CertificateRequest';
}

export interface ICertificate extends Document {
    studentId: mongoose.Schema.Types.ObjectId;
    certificateType: 'Bonafide' | 'Transfer' | 'Conduct' | 'Course Completion' | 'Others';
    issueDate: Date;
    certificateFile: string;
    issuedBy: string;
    type: 'Certificate';
}


export const CertificateRequest = mongoose.model<ICertificateRequest>('Certificate', certificateRequestSchema);
export const Certificate = mongoose.model<ICertificate>('Certificate', certificateSchema);

