import dotenv from "dotenv";
dotenv.config({ path: "./.env", override: true });

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017",
  DB_NAME: process.env.DB_NAME || "test",
};

export default config;