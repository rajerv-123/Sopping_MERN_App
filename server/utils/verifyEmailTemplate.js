const verificationTemplate = ({name, url}) => {
  return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>Welcome to BlinkeyIt, ${name}!</h2>
        <p>Thank you for registering with BlinkeyIt. To complete your registration, please verify your email address by clicking the button below:</p>
        <p style="text-align: center;">
          <a href="${url}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Verify Email</a>
        </p>
        <p>If you didn’t register with BlinkeyIt, you can safely ignore this email.</p>
        <p>Thank you,<br>The BlinkeyIt Team</p>
      </div>
    `;
};
export default verificationTemplate;