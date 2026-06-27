import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// ==========================
// Login User
// ==========================
export const loginuser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      const error = new Error("Email and Password are required");
      error.statusCode = 400;
      return next(error);
    }

    // Check if email exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 404;
      return next(error);
    }

    // Compare entered password with hashed password
    const isVerified = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isVerified) {
      const error = new Error("Incorrect Password");
      error.statusCode = 401;
      return next(error);
    }

    return res.status(200).json({
      message: "Login Successful",
      user: existingUser,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Logout User
// ==========================
export const logoutuser = (req, res) => {
  res.status(200).json({
    message: "Logout successful",
  });
};

// ==========================
// Register User
// ==========================
export const registeruser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    // Check required fields
    if (!fullName || !email || !password || !phone || !gender || !dob) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Generate placeholder profile photo
    const photoUrl = `https://placehold.co/600x400?text=${fullName
      .charAt(0)
      .toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicID: null,
    };

    // Generate Salt
    const salt = await bcrypt.genSalt(10);

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create User
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      gender,
      dob,
      photo,
    });

    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};