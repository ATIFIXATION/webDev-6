import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.connection.config.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

// Routes
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Cravings Backend is Running",
  });
});

// Start Server
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});