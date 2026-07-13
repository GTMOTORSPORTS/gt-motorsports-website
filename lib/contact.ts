export type ContactEnquiry = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactEnquiry }
  | { ok: false; errors: Record<string, string> };

const textPattern = /^[a-zA-Z0-9\s.,'&()/:+-]+$/;
const phonePattern = /^[0-9+\s()-]{8,20}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function validateText(value: string, label: string, min: number, max: number) {
  if (!value) {
    return `${label} is required.`;
  }

  if (value.length < min) {
    return `${label} is too short.`;
  }

  if (value.length > max) {
    return `${label} must be ${max} characters or less.`;
  }

  if (!textPattern.test(value)) {
    return `${label} contains unsupported characters.`;
  }

  return "";
}

export function validateContactEnquiry(input: unknown): ContactValidationResult {
  const raw = typeof input === "object" && input !== null ? input as Record<string, unknown> : {};
  const data: ContactEnquiry = {
    name: clean(raw.name),
    phone: clean(raw.phone),
    email: clean(raw.email).toLowerCase(),
    subject: clean(raw.subject),
    message: clean(raw.message),
  };

  const errors: Record<string, string> = {};

  errors.name = validateText(data.name, "Name", 2, 80);
  errors.phone = phonePattern.test(data.phone) ? "" : "Enter a valid phone number.";
  errors.email = emailPattern.test(data.email) && data.email.length <= 120 ? "" : "Enter a valid email address.";
  errors.subject = validateText(data.subject, "Subject", 3, 120);
  errors.message = validateText(data.message, "Message", 10, 1200);

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) {
      delete errors[key];
    }
  });

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}
