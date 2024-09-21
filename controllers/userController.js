// user controller

import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// signup
export const signup = async (req, res) => {
  const { name, number, email, password } = req.body;
  // console.log(name, number, email, password);
  try {
    // check user
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already registered" });
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // create user
    user = new User({
      name,
      number,
      email,
      password: hashPassword,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
  }
};

// login
export const login = async () => {};
