import { Schema, model, Document } from 'mongoose';

interface IMaterial extends Document {
  subject: Schema.Types.ObjectId;
  title: string;
  description: string;
  fileUrl: string;
}

const MaterialSchema = new Schema<IMaterial>({
  subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  title: { type: String, required: true },
  description: { type: String },
  fileUrl: { type: String, required: true },
  
});

export const Material = model<IMaterial>('Material', MaterialSchema);


export default Material;