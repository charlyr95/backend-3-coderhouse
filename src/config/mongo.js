import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  if (!config.MONGO_URL) {
    console.error("MONGO_URL no está definida en la configuración");
    process.exit(1); // Exit process with failure
  }
  if (!config.DB_NAME) {
    console.error("DB_NAME no está definida en la configuración");
    process.exit(1); // Exit process with failure
  }
  try {
    await mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;