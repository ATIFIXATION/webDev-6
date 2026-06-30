import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.connection.config.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Cravings Backend is Running",
  });
});

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});