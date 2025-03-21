import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, firstName, lastName, profession, topics, teams, privacyPolicy, captchaValue } = await req.json();

    // Basic Validation
    if (!email || !firstName || !lastName || !profession || !privacyPolicy) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    if (!captchaValue) {
      return NextResponse.json({ message: "Captcha verification failed." }, { status: 400 });
    }

    // // Verify Google reCAPTCHA
    // const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    // const captchaResponse = await fetch(
    //   `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${captchaValue}`,
    //   { method: "POST" }
    // );

    // if (!captchaResponse.ok) {
    //   return NextResponse.json({ message: "Captcha verification request failed." }, { status: 500 });
    // }

    // const captchaResult = await captchaResponse.json();
    // if (!captchaResult.success) {
    //   return NextResponse.json({ message: "Invalid captcha." }, { status: 400 });
    // }

    // Nodemailer Transport
    const transporter = nodemailer.createTransport({
      host:  process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "New Signup Submission",
      text: `
        New user signed up:
        - Name: ${firstName} ${lastName}
        - Email: ${email}
        - Profession: ${profession}
        - Topics: ${Array.isArray(topics) ? topics.join(", ") : "None"}
        - Teams: ${Array.isArray(teams) ? teams.join(", ") : "None"}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      return NextResponse.json({ message: "Failed to send email.", error: emailError.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Form submitted and email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server error.", error: error.message }, { status: 500 });
  }
}
