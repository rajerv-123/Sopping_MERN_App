import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

if (process.env.RESEND_API) {
  console.log("API key found");
}

const resend = new Resend("re_123456789");

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Blinkit <onboarding@resend.dev>",
      to: sendTo,
      subject: subject,
      html: html,
    });
    if (error) {
      return console.error({ error });
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default sendEmail;