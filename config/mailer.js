import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailOptions = {
  from: "shiva2003rajawat@gmail.com",
  to: "mindcodersindore@gmail.com",
  subject: "Testing mail",
  text: "Hello, this is a test mail",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Email sent", info.response);
  }
});
