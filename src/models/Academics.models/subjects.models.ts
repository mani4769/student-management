import { Schema, model, Document } from 'mongoose';

interface ISubject extends Document {
  name: string;
  code: string;
  creditHours: number;
  syllabus: string[];
}

const SubjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  code: { type: String, required: true },
  creditHours: { type: Number, required: true },
  syllabus: [{ type: String, required: true }],
});

export const Subject = model<ISubject>('Subject', SubjectSchema);

export default Subject;