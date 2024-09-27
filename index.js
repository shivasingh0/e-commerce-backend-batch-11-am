import express from "express";
import dotenv from "dotenv";
import connectToDb from "./dbConnection/db.js";
import signupRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import nodemailer from "nodemailer";

// configure dotenv and express
dotenv.config();
const app = express();

// database connection
connectToDb();

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello world...");
});

// ------------------------
// app.get('/sendmail', (req, res) => {

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// const mailOptions = {
//   from: process.env.SMTP_USER,
//   to: "mindcodersgithub@gmail.com",
//   subject: "Testing mail",
//   // text: "Hello, this is a test mail",
//   html: "<h1>Hello this is test mail</h1>"
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     return console.log(err);
//   } else {
//     console.log("Email sent", info.response);
//     res.send("Email sent", info.response)
//   }
// });

// })

// ------------------------

// use middleware
app.use(express.json())

// routes
// --> http://localhost:9000/user/signup
app.use("/user", signupRouter)
app.use("/product", productRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
