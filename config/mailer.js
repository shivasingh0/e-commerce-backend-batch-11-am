import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from 'url';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendmail = async (to, templateName, templateData) => {

  const templatePath  = path.join(__dirname, "./htmlTemplate/mail.ejs")

  console.log(templatePath);


  const htmlTemplate = await ejs.renderFile(templatePath, templateData)

//   const htmlTemplate = `
//   <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//     <h2>Welcome to Our Website</h2>
//     <p>Dear ${templateData.username},</p>
//     <p>Thank you for registering with us. Below are your details:</p>
//     <ul>
//       <li><strong>Email:</strong> ${templateData.email}</li>
//       <li><strong>Password:</strong> ${templateData.password}</li>
//     </ul>
//     <p>We hope you enjoy your experience with us.</p>
//     <p>Best regards,</p>
//     <p>The Team</p>
//   </div>
// `;

  const mailOptions = {
    from: "shiva2003rajawat@gmail.com",
    to,
    subject: "Thankyou mail",
    text: "text",
    html: htmlTemplate
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("Error in sending mail",err);
    } else {
      console.log("Email sent", info.response);
    }
  });
};
