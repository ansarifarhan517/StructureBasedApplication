import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for Label document
export interface LabelDoc extends Document {
    key: string;
    value: string;
    locale: string;
    clientId: number;
    type: string;
}

// Create the schema for Label model
const labelSchema = new Schema<LabelDoc>({
    key: { type: String, required: true },
    value: { type: String, required: true },
    locale: { type: String, required: true },
    clientId: { type: Number, default: 0 },
    type: { type: String, required: true }
});

// Create the model using the schema
const Label = mongoose.model<LabelDoc>('Label', labelSchema);

// Export the Label model
export default Label;
