import transporter from "../config/mailer.js";
import { buildAdminEmail, buildCustomerEmail } from "../templates/contactEmails.js";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function normalizeText(value) {
  return String(value || "").trim();
}

export async function submitContactForm(req, res, next) {
  try {
    const name = normalizeText(req.body?.name);
    const email = normalizeText(req.body?.email);
    const phone = normalizeText(req.body?.phone);
    const message = normalizeText(req.body?.message);

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const fromEmail = process.env.EMAIL_FROM || "SNG Maintenance <info@sngmaintenance.com.au>";
    const adminEmail = process.env.CONTACT_TO_EMAIL || "info@sngmaintenance.com.au";

    const customerMail = {
      from: fromEmail,
      to: email,
      subject: "We received your message - SNG Maintenance",
      html: buildCustomerEmail({ name }),
    };

    const adminMail = {
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: buildAdminEmail({ name, email, phone, message }),
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(customerMail);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    next(error);
  }
}
