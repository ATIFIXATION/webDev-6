import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.connection.config.js";

import authRouter from "./routes/auth.route.js";
import dashboardRoutes from "./routes/dashboard.route.js";
import publicRoutes from "./routes/public.route.js";

dotenv.config();

const app = express();

// ============================
// Middlewares
// ============================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================
// Database Connection
// ============================
connectDB();

// ============================
// Routes
// ============================

app.use("/auth", authRouter);

app.use("/dashboard", dashboardRoutes);

app.use("/", publicRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Cravings Backend is Running 🚀",
  });
});

// ============================
// Server
// ============================

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});