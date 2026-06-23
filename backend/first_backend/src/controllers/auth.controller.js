import User from "../models/user.model.js";

export const loginuser = (req, res) => {
res.json({
message: "Login successful from controller",
});
};

export const logoutuser = (req, res) => {
res.json({
message: "Logout successful from controller",
});
};

export const registeruser = async (req, res) => {
try {
const { fullName, email, password, phone, gender, dob } = req.body;

```
if (!fullName || !email || !password || !phone || !gender || !dob) {
  return res.status(400).json({
    message: "All fields are required",
  });
}

const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    message: "User already exists",
  });
}

res.status(201).json({
  message: "Registration successful",
});
```

} catch (error) {
console.log(error.message);

```
res.status(500).json({
  message: "Internal Server Error",
});
```

}
};
