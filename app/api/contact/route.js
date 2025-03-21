import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { enquiryType, enquiry, name, email } = await req.json();

    if (!email || !name || !enquiry) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    // Nodemailer Transport Configuration
    const transporter = nodemailer.createTransport({
      host:  process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    
    });
    
    
    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // e.g., "info@frcglobal.org.uk"
      subject: `New Contact Form Submission - ${enquiryType}`,
      text: `
        Enquiry Type: ${enquiryType}
        Name: ${name}
        Email: ${email}
        Message: ${enquiry}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email.", error: error.message }, { status: 500 });
  }
}
