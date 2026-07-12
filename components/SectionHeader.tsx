type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "dark",
}: SectionHeaderProps) {
  const titleClass = tone === "light" ? "text-asphalt" : "text-white";
  const copyClass = tone === "light" ? "text-black/65" : "text-white/70";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brake">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-black leading-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-4 text-base leading-7 ${copyClass}`}>{copy}</p> : null}
    </div>
  );
}
