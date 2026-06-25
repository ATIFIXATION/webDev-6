import User from "../models/user.model.js";

// Login User
export const loginuser = (req, res) => {
  res.status(200).json({
    message: "Login successful",
  });
};

// Logout User
export const logoutuser = (req, res) => {
  res.status(200).json({
    message: "Logout successful",
  });
};

// Register User
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

    // Create user
    const newUser = await User.create({
      fullName,
      email,
      password,
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