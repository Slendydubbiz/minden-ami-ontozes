import { sendBookingMail } from '../services/mail.service.js';

export const handleBooking = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await sendBookingMail({ name, email, phone, message });

    res.render('koszonom')
  } catch (err) {
    console.error(err);
    res.status(500).send('Hiba történt az üzenet küldésekor.');
  }
};
