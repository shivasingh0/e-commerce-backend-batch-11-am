// user controller
import { generateToken } from "../config/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// signup
export const signup = async (req, res) => {
  const { name, number, email, password } = req.body;
  // console.log(name, number, email, password);
  try {

    if (!email || !password || !name || !number) {
      return res.status(400).json({msg: "please fill all the fields."})
    }

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

    const token = generateToken(user._id)

    await user.save();
    res.status(201).json({
      id: user._id,
      name: user.name,
      number: user.number,
      token
    });
  } catch (error) {
    console.error(error.message);
  }
};

// login
export const login = async (req, res) => {
  const {email, password} = req.body;
  try {

    // check data fields
    if (!email || !password) {
      return res.status(400).json({msg: "please fill all the fields."})
    }

    // find user in DB
    const user = await User.findOne({email})

    if (!user) {
      return res.status(401).json({msg: "User not found."})
    }

    const decodePassword = await bcrypt.compare(password, user.password)
    console.log("decodePassword", decodePassword);
    
    // check password
    if (!decodePassword) {
      return res.status(401).json({msg: "Invalid password"})
    }

    const token = generateToken(user._id)

    res.status(200).json({
      id: user._id,
      name: user.name,
      number: user.number,
      email: user.email,
      token
    })
    
  } catch (error) {
    console.error(error.message);
    
  }
};
