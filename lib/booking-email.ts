import nodemailer from "nodemailer";
import { BookingEnquiry, escapeHtml } from "@/lib/booking";
import { site } from "@/lib/site";

type EmailMessage = {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required email environment variable: ${name}`);
  }

  return value;
}

function formatRows(enquiry: BookingEnquiry) {
  const rows: Array<[string, string]> = [
    ["Full name", enquiry.fullName],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Vehicle make", enquiry.vehicleMake],
    ["Vehicle model", enquiry.vehicleModel],
    ["Vehicle year", enquiry.vehicleYear],
    ["Registration", enquiry.registration || "Not supplied"],
    ["Current kilometres", enquiry.currentKilometres],
    ["Service or repair required", enquiry.serviceRequired],
    ["Preferred date", enquiry.preferredDate],
    ["Preferred time", enquiry.preferredTime],
    ["Enquiry type", enquiry.enquiryType === "walk-in" ? "Walk-in enquiry" : "Appointment enquiry"],
    ["Additional notes", enquiry.additionalNotes || "Not supplied"],
  ];

  return rows;
}

function rowsToText(enquiry: BookingEnquiry) {
  return formatRows(enquiry)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function rowsToHtml(enquiry: BookingEnquiry) {
  return formatRows(enquiry)
    .map(([label, value]) => `
      <tr>
        <th align="left" style="padding:8px 12px;border-bottom:1px solid #dddddd;">${escapeHtml(label)}</th>
        <td style="padding:8px 12px;border-bottom:1px solid #dddddd;">${escapeHtml(value)}</td>
      </tr>
    `)
    .join("");
}

export function buildBookingNotification(enquiry: BookingEnquiry): EmailMessage {
  const subject = `New Booking Request – ${enquiry.fullName} – ${enquiry.vehicleMake} ${enquiry.vehicleModel}`;
  const text = [
    "New booking enquiry received from the G&T Motorsports website.",
    "",
    rowsToText(enquiry),
    "",
    `Call customer: ${enquiry.phone}`,
    `Reply to customer: ${enquiry.email}`,
  ].join("\n");
  const html = `
    <div style="margin:0;padding:24px;background:#111111;font-family:Arial,sans-serif;color:#ffffff;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;color:#111111;border-top:6px solid #d71920;">
        <div style="padding:24px;background:#111111;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;">New Booking Request</h1>
          <p style="margin:10px 0 0;color:#dddddd;">A booking request was submitted through the G&amp;T Motorsports website.</p>
        </div>
        <div style="padding:24px;">
          <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
            ${rowsToHtml(enquiry)}
          </table>
        </div>
      </div>
    </div>
  `;

  return {
    to: requiredEnv("BOOKING_EMAIL_TO"),
    replyTo: enquiry.email,
    subject,
    text,
    html,
  };
}

export function buildCustomerConfirmation(enquiry: BookingEnquiry): EmailMessage {
  const subject = "We received your booking request – G&T Motorsports";
  const text = [
    `Hi ${enquiry.fullName},`,
    "",
    "Thanks for contacting G&T Motorsports. We have received your booking request.",
    "",
    "This is a booking request, not a confirmed appointment. The workshop will contact you to confirm availability.",
    "",
    "Appointments are recommended. Walk-ins are welcome; waiting times depend on the work required and current workshop availability.",
    "",
    "Your enquiry details:",
    rowsToText(enquiry),
    "",
    `${site.name}`,
    site.address,
    `Phone: ${site.phone}`,
  ].join("\n");
  const html = `
    <div style="margin:0;padding:24px;background:#111111;font-family:Arial,sans-serif;color:#ffffff;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;color:#111111;border-top:6px solid #d71920;">
        <div style="padding:24px;background:#111111;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;">We received your booking request</h1>
          <p style="margin:10px 0 0;color:#dddddd;">G&amp;T Motorsports</p>
        </div>
        <div style="padding:24px;">
          <p>Hi ${escapeHtml(enquiry.fullName)},</p>
          <p>Thanks for contacting G&amp;T Motorsports. We have received your booking request.</p>
          <p><strong>This is a booking request, not a confirmed appointment.</strong> The workshop will contact you to confirm availability.</p>
          <p><strong>Appointments are recommended.</strong> Walk-ins are welcome, but wait times depend on the work required and current workshop availability.</p>
          <h2 style="font-size:18px;color:#d71920;">Your enquiry details</h2>
          <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
            ${rowsToHtml(enquiry)}
          </table>
          <p style="margin-top:20px;">${escapeHtml(site.name)}<br>${escapeHtml(site.address)}<br>Phone: ${escapeHtml(site.phone)}</p>
        </div>
      </div>
    </div>
  `;

  return {
    to: enquiry.email,
    subject,
    text,
    html,
  };
}

export async function sendBookingEmails(enquiry: BookingEnquiry) {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(requiredEnv("SMTP_PORT"));
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const from = requiredEnv("BOOKING_EMAIL_FROM");
  const secure = process.env.SMTP_SECURE === "true";

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const notification = buildBookingNotification(enquiry);
  const confirmation = buildCustomerConfirmation(enquiry);

  await transporter.sendMail({
    from,
    to: notification.to,
    replyTo: notification.replyTo,
    subject: notification.subject,
    text: notification.text,
    html: notification.html,
  });

  await transporter.sendMail({
    from,
    to: confirmation.to,
    subject: confirmation.subject,
    text: confirmation.text,
    html: confirmation.html,
  });
}
