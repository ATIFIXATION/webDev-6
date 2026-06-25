import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/config/db.connection.config.js";
import publicRoutes from "./src/routers/public.route.js";
import authRoutes from "./src/routers/auth.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my first backend project",
  });
});

// Routes
app.use("/api/public", publicRoutes);
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});