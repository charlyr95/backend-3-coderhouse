import { Schema, model } from "mongoose";

const petsCollection = "pets";
const petSchema = new Schema({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    size: { type: String, required: true },
    description: { type: String, required: true },
    isAdopted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default model(petsCollection, petSchema);