import transporter from '../config/mail.js';

export const sendBookingMail = async ({ name, email_address, phone_number, message }) => {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAILS.split(','),
    subject: 'Új időpontkérés a weboldalról',
    html: `
      <h2>Új időpontkérés</h2>
      <p><strong>Név:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email_address}</p>
      <p><strong>Telefon:</strong> ${phone_number}</p>
      <p><strong>Üzenet:</strong><br>${message}</p>
    `
  });
};
