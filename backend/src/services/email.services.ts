import transporter from "../config/nodemailer.config";

export const sendResetEmail = async (email: string, resetCode: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Password Reset Code',
    text: `Your password reset code is: ${resetCode}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending reset email');
  }
};
