export type BookingEnquiry = {
  fullName: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  registration: string;
  currentKilometres: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  enquiryType: "appointment" | "walk-in";
  additionalNotes: string;
  consent: boolean;
};

export type BookingValidationResult =
  | { ok: true; data: BookingEnquiry }
  | { ok: false; errors: Record<string, string> };

const textPattern = /^[a-zA-Z0-9\s.,'&()/:+-]+$/;
const phonePattern = /^[0-9+\s()-]{8,20}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;

function clean(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function validateText(
  value: string,
  label: string,
  min: number,
  max: number,
  required = true,
) {
  if (!value) {
    return required ? `${label} is required.` : "";
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

export function validateBookingEnquiry(input: unknown): BookingValidationResult {
  const raw = typeof input === "object" && input !== null ? input as Record<string, unknown> : {};
  const data: BookingEnquiry = {
    fullName: clean(raw.fullName),
    phone: clean(raw.phone),
    email: clean(raw.email).toLowerCase(),
    vehicleMake: clean(raw.vehicleMake),
    vehicleModel: clean(raw.vehicleModel),
    vehicleYear: clean(raw.vehicleYear),
    registration: clean(raw.registration).toUpperCase(),
    currentKilometres: clean(raw.currentKilometres),
    serviceRequired: clean(raw.serviceRequired),
    preferredDate: clean(raw.preferredDate),
    preferredTime: clean(raw.preferredTime),
    enquiryType: raw.enquiryType === "walk-in" ? "walk-in" : "appointment",
    additionalNotes: clean(raw.additionalNotes),
    consent: raw.consent === true,
  };

  const errors: Record<string, string> = {};

  errors.fullName = validateText(data.fullName, "Full name", 2, 80);
  errors.phone = phonePattern.test(data.phone) ? "" : "Enter a valid phone number.";
  errors.email = emailPattern.test(data.email) && data.email.length <= 120 ? "" : "Enter a valid email address.";
  errors.vehicleMake = validateText(data.vehicleMake, "Vehicle make", 1, 60);
  errors.vehicleModel = validateText(data.vehicleModel, "Vehicle model", 1, 80);
  errors.vehicleYear = /^(19|20)\d{2}$/.test(data.vehicleYear) ? "" : "Enter a valid vehicle year.";
  errors.registration = validateText(data.registration, "Registration", 1, 20, false);
  errors.currentKilometres = /^\d{1,7}$/.test(data.currentKilometres.replace(/,/g, ""))
    ? ""
    : "Enter current kilometres using numbers only.";
  errors.serviceRequired = validateText(data.serviceRequired, "Service or repair required", 3, 160);
  errors.preferredDate = data.preferredDate && !Number.isNaN(Date.parse(data.preferredDate))
    ? ""
    : "Choose a preferred date.";
  errors.preferredTime = timePattern.test(data.preferredTime) ? "" : "Choose a preferred time.";
  errors.additionalNotes = validateText(data.additionalNotes, "Additional notes", 0, 1000, false);
  errors.consent = data.consent ? "" : "Consent is required before submitting.";

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

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
