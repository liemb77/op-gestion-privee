import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '2525'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"OP Gestion Privée" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Nouveau message de ${name} — opgestionprivee.ca`,
    text: `Nom: ${name}\nCourriel: ${email}\nTéléphone: ${phone || 'Non fourni'}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f8f5;">
        <div style="background: #162B4A; padding: 24px; margin-bottom: 24px;">
          <p style="color: #C4A35A; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">OP Gestion Privée</p>
          <h1 style="color: white; font-size: 20px; margin: 0;">Nouveau message reçu</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Nom</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Courriel</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;"><a href="mailto:${email}" style="color: #162B4A;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Téléphone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e3dc; color: #0C1B2E;">${phone || 'Non fourni'}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #5A6A7A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
          <p style="color: #0C1B2E; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
