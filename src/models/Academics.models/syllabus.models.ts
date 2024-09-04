import { Schema, model, Document } from 'mongoose';

interface ISyllabus extends Document {
  subject: Schema.Types.ObjectId;
  topics: string[];
}

const SyllabusSchema = new Schema<ISyllabus>({
  subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  topics: [{ type: String, required: true }],
});

export const Syllabus = model<ISyllabus>('Syllabus', SyllabusSchema);


export default Syllabus;