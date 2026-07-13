import nodemailer from "nodemailer";
import { escapeHtml } from "@/lib/booking";
import { ContactEnquiry } from "@/lib/contact";
import { site } from "@/lib/site";

function requiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required email environment variable: ${name}`);
  }

  return value;
}

function formatRows(enquiry: ContactEnquiry) {
  return [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Subject", enquiry.subject],
    ["Message", enquiry.message],
  ];
}

function rowsToText(enquiry: ContactEnquiry) {
  return formatRows(enquiry)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function rowsToHtml(enquiry: ContactEnquiry) {
  return formatRows(enquiry)
    .map(([label, value]) => `
      <tr>
        <th align="left" style="padding:10px 12px;border-bottom:1px solid #dddddd;">${escapeHtml(label)}</th>
        <td style="padding:10px 12px;border-bottom:1px solid #dddddd;">${escapeHtml(value)}</td>
      </tr>
    `)
    .join("");
}

export async function sendContactEmail(enquiry: ContactEnquiry) {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(requiredEnv("SMTP_PORT"));
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const from = requiredEnv("BOOKING_EMAIL_FROM");
  const to = requiredEnv("BOOKING_EMAIL_TO");
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

  await transporter.sendMail({
    from,
    to,
    replyTo: enquiry.email,
    subject: `Website Enquiry - ${enquiry.subject}`,
    text: [
      "New contact enquiry received from the G&T Motorsports website.",
      "",
      rowsToText(enquiry),
      "",
      `Call customer: ${enquiry.phone}`,
      `Reply to customer: ${enquiry.email}`,
    ].join("\n"),
    html: `
      <div style="margin:0;padding:24px;background:#111111;font-family:Arial,sans-serif;color:#ffffff;">
        <div style="max-width:760px;margin:0 auto;background:#ffffff;color:#111111;border-top:6px solid #d71920;">
          <div style="padding:24px;background:#111111;color:#ffffff;">
            <h1 style="margin:0;font-size:24px;">New Website Enquiry</h1>
            <p style="margin:10px 0 0;color:#dddddd;">${escapeHtml(site.name)}</p>
          </div>
          <div style="padding:24px;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
              ${rowsToHtml(enquiry)}
            </table>
          </div>
        </div>
      </div>
    `,
  });
}
