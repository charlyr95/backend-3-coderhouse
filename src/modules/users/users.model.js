import { Schema, model } from "mongoose";

const usersCollection = "users";
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, requi1red: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["user", "admin"], default: "user" },
    pets: { type: [Schema.Types.ObjectId], ref: "pets", default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default model(usersCollection, userSchema);