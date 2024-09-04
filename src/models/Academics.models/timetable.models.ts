import { Schema, model, Document } from 'mongoose';

interface ITimetable extends Document {
  subject: Schema.Types.ObjectId;
  day: string;
  startTime: string;
  endTime: string;
  room: string;
}

const TimetableSchema = new Schema<ITimetable>({
  subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  room: { type: String, required: true },
});

export const Timetable = model<ITimetable>('Timetable', TimetableSchema);


export default Timetable;