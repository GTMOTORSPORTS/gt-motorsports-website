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

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text" },
];

const inputClass =
  "focus-ring min-h-12 rounded-md border border-white/10 bg-black/70 px-4 text-white placeholder:text-white/36 transition hover:border-white/25 focus:border-brake";

export function ContactForm() {
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
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
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
          message: result.message || "Something went wrong. Please call 0414 901 666.",
          errors: result.errors || {},
        });
        return;
      }

      formRef.current?.reset();
      submittingRef.current = false;
      setState({
        status: "success",
        message: "Thanks. Your enquiry has been sent.",
        errors: {},
      });
    } catch {
      submittingRef.current = false;
      setState({
        status: "error",
        message: "Something went wrong. Please call 0414 901 666.",
        errors: {},
      });
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit} ref={formRef} noValidate>
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
            <label className="grid gap-2 text-sm font-bold text-white" htmlFor={fieldId} key={field.name}>
              {field.label}
              <input
                aria-describedby={error ? `${fieldId}-error` : undefined}
                aria-invalid={Boolean(error)}
                autoComplete={field.autoComplete}
                className={inputClass}
                id={fieldId}
                name={field.name}
                required
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
      <label className="grid gap-2 text-sm font-bold text-white" htmlFor={`${formId}-message`}>
        Message
        <textarea
          aria-describedby={state.errors.message ? `${formId}-message-error` : undefined}
          aria-invalid={Boolean(state.errors.message)}
          className="focus-ring min-h-36 rounded-md border border-white/10 bg-black/70 px-4 py-3 text-white transition hover:border-white/25 focus:border-brake"
          id={`${formId}-message`}
          name="message"
          required
        />
        {state.errors.message ? (
          <span className="text-xs font-bold text-red-300" id={`${formId}-message-error`}>
            {state.errors.message}
          </span>
        ) : null}
      </label>
      <button
        className="focus-ring min-h-14 rounded-md bg-brake px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-1 hover:bg-white hover:text-asphalt disabled:cursor-not-allowed disabled:opacity-60"
        disabled={state.status === "loading"}
        type="submit"
      >
        {state.status === "loading" ? "Sending..." : "Send Enquiry"}
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
            Need help now? Call{" "}
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
