import { escapeHtml } from "../utils/escapeHtml.js";

const brand = {
  name: "SNG Maintenance",
  primary: "#1f5c46",
  secondary: "#d9b65d",
  dark: "#123126",
  text: "#1f2937",
  muted: "#6b7280",
  background: "#f4f7f4",
  card: "#ffffff",
};

function sharedShell({ title, headline, body, accentLabel }) {
  return `
  <div style="margin:0;padding:0;background:${brand.background};font-family:Arial,Helvetica,sans-serif;color:${brand.text};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brand.background};padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;background:${brand.card};border-radius:20px;overflow:hidden;box-shadow:0 14px 40px rgba(18,49,38,0.12);">
            <tr>
              <td style="background:linear-gradient(135deg, ${brand.primary} 0%, ${brand.dark} 100%);padding:28px 32px;color:#fff;">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:0.85;">${escapeHtml(brand.name)}</div>
                <div style="font-size:30px;font-weight:700;line-height:1.15;margin-top:8px;">${escapeHtml(title)}</div>
                <div style="margin-top:10px;font-size:14px;line-height:1.6;opacity:0.9;">${escapeHtml(accentLabel)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <div style="font-size:20px;font-weight:700;color:${brand.dark};margin-bottom:10px;">${escapeHtml(headline)}</div>
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px;">
                <div style="background:#f8faf8;border:1px solid #e7efe8;border-radius:16px;padding:18px 20px;">
                  <div style="font-size:13px;color:${brand.muted};line-height:1.7;">
                    Need a quicker reply? Call <strong style="color:${brand.dark};">0417 698 433</strong>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;color:${brand.muted};font-size:12px;line-height:1.6;">
                This email was generated from the SNG Maintenance contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`;
}

export function buildCustomerEmail({ name }) {
  return sharedShell({
    title: "Message Received",
    headline: `Thanks ${escapeHtml(name || "there")}, we've received your message.`,
    accentLabel:
      "Our team will review your enquiry and get back to you as soon as possible.",
    body: `
      <p style="font-size:15px;line-height:1.8;margin:0 0 16px;color:${brand.text};">
        We appreciate you getting in touch with SNG Maintenance. Your enquiry is now in our inbox and a member of our team will contact you shortly.
      </p>
      <div style="display:block;background:#f8faf8;border-left:4px solid ${brand.secondary};border-radius:12px;padding:16px 18px;margin:18px 0 0;">
        <div style="font-size:13px;color:${brand.muted};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">What happens next</div>
        <div style="font-size:15px;line-height:1.8;color:${brand.text};">
          We'll review your request, and reply with the best next step.
        </div>
      </div>
    `,
  });
}

export function buildAdminEmail({ name, email, phone, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return sharedShell({
    title: "New Contact Form Submission",
    headline: "A new enquiry has been submitted through the website.",
    accentLabel: "Review the customer details below and reply from your preferred inbox.",
    body: `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
        <tr>
          <td style="padding:14px 16px;background:#f8faf8;border:1px solid #e7efe8;border-radius:12px;">
            <div style="font-size:12px;color:${brand.muted};text-transform:uppercase;letter-spacing:1px;">Name</div>
            <div style="font-size:15px;line-height:1.6;color:${brand.text};font-weight:700;">${safeName}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;background:#f8faf8;border:1px solid #e7efe8;border-radius:12px;">
            <div style="font-size:12px;color:${brand.muted};text-transform:uppercase;letter-spacing:1px;">Email</div>
            <div style="font-size:15px;line-height:1.6;color:${brand.text};font-weight:700;">${safeEmail}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;background:#f8faf8;border:1px solid #e7efe8;border-radius:12px;">
            <div style="font-size:12px;color:${brand.muted};text-transform:uppercase;letter-spacing:1px;">Phone</div>
            <div style="font-size:15px;line-height:1.6;color:${brand.text};font-weight:700;">${safePhone}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;background:#f8faf8;border:1px solid #e7efe8;border-radius:12px;">
            <div style="font-size:12px;color:${brand.muted};text-transform:uppercase;letter-spacing:1px;">Message</div>
            <div style="font-size:15px;line-height:1.8;color:${brand.text};white-space:normal;">${safeMessage}</div>
          </td>
        </tr>
      </table>
    `,
  });
}
