import { site } from "@/lib/site";

const fields = [
  { label: "Name", name: "Name", type: "text", required: true },
  { label: "Phone", name: "Phone", type: "tel", required: true },
  { label: "Email", name: "Email", type: "email", required: true },
  { label: "Vehicle Make", name: "Vehicle Make", type: "text", required: true },
  { label: "Vehicle Model", name: "Vehicle Model", type: "text", required: true },
  { label: "Registration", name: "Registration", type: "text", required: false },
  { label: "Service Required", name: "Service Required", type: "text", required: true },
  { label: "Preferred Date", name: "Preferred Date", type: "date", required: false },
];

type BookingFormProps = {
  compact?: boolean;
};

export function BookingForm({ compact = false }: BookingFormProps) {
  return (
    <form
      className="grid gap-4"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label className="grid gap-2 text-sm font-bold text-white" key={field.name}>
            {field.label}
            <input
              className="focus-ring min-h-12 rounded-md border border-white/10 bg-black/70 px-4 text-white placeholder:text-white/36 transition hover:border-white/25 focus:border-brake"
              name={field.name}
              type={field.type}
              required={field.required}
            />
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-bold text-white">
        Message
        <textarea
          className={`focus-ring rounded-md border border-white/10 bg-black/70 px-4 py-3 text-white transition hover:border-white/25 focus:border-brake ${
            compact ? "min-h-28" : "min-h-36"
          }`}
          name="Message"
        />
      </label>
      <button
        className="focus-ring min-h-14 rounded-md bg-brake px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-1 hover:bg-white hover:text-asphalt"
        type="submit"
      >
        Send Booking Request
      </button>
    </form>
  );
}
