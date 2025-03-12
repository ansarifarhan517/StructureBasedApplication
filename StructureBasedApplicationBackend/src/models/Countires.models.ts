import mongoose, { Document } from 'mongoose';

// Define the interface for the Country document
export interface CountryDoc extends Document {
    name: string;
    code: string;
    region: string;
    population: number;
    area: number;
}

// Create the schema for countries
const CountrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    region: { type: String, required: true },
    population: { type: Number, required: true },
    area: { type: Number, required: true },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.__v;
        }
    },
    timestamps: true
});

// Create the model for countries
const Country = mongoose.model<CountryDoc>('Country', CountrySchema);

// Export the model
export { Country };
