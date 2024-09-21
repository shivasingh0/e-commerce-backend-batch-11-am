// user model
import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
    },
    number: {
      type: Number,
      required: [true, "Number is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: "user"
    // }
  },
  { timestamps: true }
);

// user model
const User = model("User", userSchema);

export default User;
