import express from "express";
import dotenv from "dotenv";
import connectToDb from "./dbConnection/db.js";
import signupRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// configure dotenv and express
dotenv.config();
const app = express();

// database connection
connectToDb();

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello world...");
});

// use middleware
app.use(express.json())

// routes

// --> http://localhost:9000/user/signup
app.use("/user", signupRouter)
app.use("/product", productRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
