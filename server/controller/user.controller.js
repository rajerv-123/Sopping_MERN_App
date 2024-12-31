import sendEmail from "../config/sendEmail.js";
import UserModel from "../modles/user.model.js";
import { Resend } from "resend";
import verificationTemplate from "../utils/verifyEmailTemplate.js";



export async function registerUserController(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", error: true, success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      password: hashPassword,
    };
    const newUser = new UserModel(payload);
    const savedUser = await newUser.save();

    const verifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${savedUser?._id}`;

    const verifyEmail = await sendEmail({
      sendTo: email,
      subject: "Verification email form blinkitWelcome to Blinkit",
      html: verificationTemplate({
        name,
        url: verifyEmailUrl,
      }),
    });

    return response.json({
      message: "User registered successfully",
      error: false,
      success: true,
      data: savedUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}
