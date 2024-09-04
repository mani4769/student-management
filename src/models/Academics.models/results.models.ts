import { Schema, model, Document } from 'mongoose';

interface IResult extends Document {
  subject: Schema.Types.ObjectId;
  studentId: string;
  marksObtained: number;
  totalMarks: number;
  grade: string;
}

const ResultSchema = new Schema<IResult>({
  subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  studentId: { type: String, required: true },
  marksObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  grade: { type: String, required: true },
});

export const Result = model<IResult>('Result', ResultSchema);


export default Result;