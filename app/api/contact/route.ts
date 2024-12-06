import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();

    // Create a transporter with your email server settings
    const transporter = nodemailer.createTransport({
      host: 'mail.theagristuff.lk', // Your email server
      port: 465, // SMTP port (usually 465 for SSL)
      secure: true, // Use SSL
      auth: {
        user: 'sales@theagristuff.lk', // Your email
        pass: process.env.EMAIL_PASSWORD // Your email password
      }
    });

    // Email options
    const mailOptions = {
      from: 'sales@theagristuff.lk',
      to: 'sales@theagristuff.lk',
      subject: `Website Contact: ${subject}`,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <h3>Subject: ${subject}</h3>
        <p>${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}