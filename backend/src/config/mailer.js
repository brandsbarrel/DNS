import "../config/env.js";
import nodemailer from "nodemailer";

const smtpHost = process.env.RESEND_SMTP_HOST || "smtp.resend.com";
const smtpPort = Number(process.env.RESEND_SMTP_PORT || 465);
const smtpSecure = String(process.env.RESEND_SMTP_SECURE || "true") === "true";
const smtpUser = process.env.RESEND_SMTP_USER || "resend";
const smtpPass = process.env.RESEND_SMTP_PASS || process.env.RESEND_API_KEY;

if (!smtpPass) {
  console.warn(
    "RESEND_SMTP_PASS or RESEND_API_KEY is not set. Mail delivery will fail until credentials are configured."
  );
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  auth: smtpPass
    ? {
        user: smtpUser,
        pass: smtpPass,
      }
    : undefined,
});

export default transporter;
