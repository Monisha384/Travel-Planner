const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🔴 Check missing fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🔴 Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Create user
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, email: user.email }
    });

  } catch (error) {
    console.error("REGISTER ERROR ❌", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
