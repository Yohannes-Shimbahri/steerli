import nodemailer from 'nodemailer';

const ALLOWED_ORIGINS = [
  'https://steerli.com',
  'https://www.steerli.com',
  'http://localhost:5173', // Vite dev server (remove in production)
];

export default async function handler(req, res) {
  const origin = req.headers.origin;
  
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
  }

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  const sanitizedName = name.trim().substring(0, 100);
  const sanitizedEmail = email.trim().substring(0, 100);
  const sanitizedSubject = subject.trim().substring(0, 200);
  const sanitizedMessage = message.trim().substring(0, 2000);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Steerli Contact Form" <${process.env.SMTP_USER}>`,
      to: 'steerli.app@gmail.com',
      replyTo: sanitizedEmail,
      subject: `New Message: ${sanitizedSubject}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h3 style="color: #4f46e5;">New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Subject:</strong> ${sanitizedSubject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${sanitizedMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Error sending email. Please try again later.' });
  }
}