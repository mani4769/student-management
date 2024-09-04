import mongoose, { Document, Schema } from "mongoose";

interface IAttendance extends Document {
    attendanceId?: string;
    regId: string;
    subjectId?: string;
    Date: Date;
    attendanceStatus?: 'Present' | 'Absent';
    attendancePercentage?: number;
    remarks?: string;
}

const attendanceSchema: Schema = new Schema<IAttendance>({
    attendanceId: {
        type: String,
    },
    regId: {
        type: String,
        required: [true, "Provide Registration Number"]
    },
    subjectId: {
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now
    },
    attendanceStatus: {
        type: String,
        enum: ['Present', 'Absent'],
    },
    attendancePercentage: {
        type: Number
    },
    remarks: {
        type: String
    }
});


const Attendance = mongoose.model<IAttendance>("Attendance", attendanceSchema);

export default Attendance;