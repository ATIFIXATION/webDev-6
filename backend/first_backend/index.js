import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.connection.config.js";
import publicRoutes from "./src/routers/public.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my first backend project",
  });
});

app.use("/api/public", publicRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  connectDB();
});