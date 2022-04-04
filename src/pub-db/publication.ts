import * as mongoose from 'mongoose';

export const PublicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export interface Publication {
  id: string;
  title: string;
  description: string;
}
