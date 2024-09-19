import express from "express";
import dotenv from "dotenv";
import connectToDb from "./dbConnection/db.js";

// configure dotenv and express
dotenv.config();
const app = express();

// database connection
connectToDb();

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello world...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
