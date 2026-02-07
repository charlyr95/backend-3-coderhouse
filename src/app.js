// npm
import express from "express";

// imports local modules
import config from "./config/config.js";
import connectDB from "./config/mongo.js";
import errorHandler from "./middleware/errorHandler.js";
import routes from "./routes/router.js";

// server setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

// routes
app.use("/api", routes);

// error handler middleware
app.use(errorHandler);


app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
});