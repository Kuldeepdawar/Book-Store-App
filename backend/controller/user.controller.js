import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// POST /user/signup
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Error in creating user:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); // get email in user
    // now get password check
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res
        .status(400)
        .json({ message: "UserName and password not match" });
    } else {
      res.status(200).json({
        message: "Login successfully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error:", +error.message);
    res.status(500).json({ message: "Server error" });
  }
};
