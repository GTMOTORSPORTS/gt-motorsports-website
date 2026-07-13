"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { site } from "@/lib/site";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const initialState: FormState = {
  status: "idle",
  message: "",
  errors: {},
};

const inputClass =
  "focus-ring min-h-12 rounded-md border border-white/10 bg-black/70 px-4 text-white placeholder:text-white/36 transition hover:border-white/25 focus:border-brake";
const labelClass = "grid gap-2 text-sm font-bold text-white";

type Field = {
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
  inputMode?: "numeric" | "tel" | "email";
  required?: boolean;
};

const fields: Field[] = [
  { name: "fullName", label: "Full name", type: "text", autoComplete: "name", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", inputMode: "tel", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", inputMode: "email", required: true },
  { name: "vehicleMake", label: "Vehicle make", type: "text", required: true },
  { name: "vehicleModel", label: "Vehicle model", type: "text", required: true },
  { name: "vehicleYear", label: "Vehicle year", type: "text", inputMode: "numeric", required: true },
  { name: "registration", label: "Registration", type: "text" },
  { name: "currentKilometres", label: "Current kilometres", type: "text", inputMode: "numeric", required: true },
  { name: "serviceRequired", label: "Service or repair required", type: "text", required: true },
  { name: "preferredDate", label: "Preferred date", type: "date", required: true },
  { name: "preferredTime", label: "Preferred time", type: "time", required: true },
];

type BookingFormProps = {
  compact?: boolean;
};

export function BookingForm({ compact = false }: BookingFormProps) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setState({ status: "loading", message: "Sending...", errors: {} });

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      vehicleMake: formData.get("vehicleMake"),
      vehicleModel: formData.get("vehicleModel"),
      vehicleYear: formData.get("vehicleYear"),
      registration: formData.get("registration"),
      currentKilometres: formData.get("currentKilometres"),
      serviceRequired: formData.get("serviceRequired"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      enquiryType: formData.get("enquiryType"),
      additionalNotes: formData.get("additionalNotes"),
      consent: formData.get("consent") === "on",
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        submittingRef.current = false;
        setState({
          status: "error",
          message: result.message || "Something went wrong; please call 0414 901 666",
          errors: result.errors || {},
        });
        return;
      }

      formRef.current?.reset();
      submittingRef.current = false;
      setState({
        status: "success",
        message: "Booking request received",
        errors: {},
      });
    } catch {
      submittingRef.current = false;
      setState({
        status: "error",
        message: "Something went wrong; please call 0414 901 666",
        errors: {},
      });
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit} ref={formRef} noValidate>
      <p className="rounded-md border border-white/10 bg-black/50 p-4 text-sm leading-6 text-white/76">
        Appointments are recommended. Walk-ins are welcome; waiting times depend
        on the work required and current workshop availability.
      </p>
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-website`}>
          Website
          <input
            autoComplete="off"
            id={`${formId}-website`}
            name="website"
            tabIndex={-1}
            type="text"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const fieldId = `${formId}-${field.name}`;
          const error = state.errors[field.name];

          return (
            <label className={labelClass} htmlFor={fieldId} key={field.name}>
              {field.label}
              <input
                aria-describedby={error ? `${fieldId}-error` : undefined}
                aria-invalid={Boolean(error)}
                autoComplete={field.autoComplete}
                className={inputClass}
                id={fieldId}
                inputMode={field.inputMode}
                name={field.name}
                required={field.required}
                type={field.type}
              />
              {error ? (
                <span className="text-xs font-bold text-red-300" id={`${fieldId}-error`}>
                  {error}
                </span>
              ) : null}
            </label>
          );
        })}
      </div>
      <label className={labelClass} htmlFor={`${formId}-enquiryType`}>
        Appointment or walk-in enquiry
        <select
          className={inputClass}
          defaultValue="appointment"
          id={`${formId}-enquiryType`}
          name="enquiryType"
          required
        >
          <option value="appointment">Appointment enquiry</option>
          <option value="walk-in">Walk-in enquiry</option>
        </select>
      </label>
      <label className={labelClass} htmlFor={`${formId}-additionalNotes`}>
        Additional notes
        <textarea
          className={`focus-ring rounded-md border border-white/10 bg-black/70 px-4 py-3 text-white transition hover:border-white/25 focus:border-brake ${
            compact ? "min-h-28" : "min-h-36"
          }`}
          id={`${formId}-additionalNotes`}
          name="additionalNotes"
        />
      </label>
      <label className="flex gap-3 rounded-md border border-white/10 bg-black/50 p-4 text-sm font-bold leading-6 text-white">
        <input
          aria-describedby={state.errors.consent ? `${formId}-consent-error` : undefined}
          className="mt-1 h-5 w-5 accent-brake"
          name="consent"
          required
          type="checkbox"
        />
        <span>
          I consent to G&T Motorsports contacting me about this booking enquiry.
          {state.errors.consent ? (
            <span className="mt-2 block text-xs font-bold text-red-300" id={`${formId}-consent-error`}>
              {state.errors.consent}
            </span>
          ) : null}
        </span>
      </label>
      <button
        className="focus-ring min-h-14 rounded-md bg-brake px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-1 hover:bg-white hover:text-asphalt disabled:cursor-not-allowed disabled:opacity-60"
        disabled={state.status === "loading"}
        type="submit"
      >
        {state.status === "loading" ? "Sending..." : "Send Booking Enquiry"}
      </button>
      <p
        aria-live="polite"
        className={`text-sm font-bold leading-6 ${
          state.status === "success"
            ? "text-green-300"
            : state.status === "error"
              ? "text-red-300"
              : "text-white/60"
        }`}
      >
        {state.message || (
          <>
            Prefer to talk? Call{" "}
            <a className="underline decoration-brake decoration-2 underline-offset-4" href={site.phoneHref}>
              {site.phone}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
