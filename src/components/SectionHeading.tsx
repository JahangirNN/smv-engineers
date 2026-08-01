import { Reveal } from "@/components/Reveal"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  outline?: string
  lead?: string
  tone?: "dark" | "light"
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  outline,
  lead,
  tone = "dark",
  align = "left",
  className = ""
}: SectionHeadingProps) {
  const onDark = tone === "light"
  const center = align === "center"

  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-10 bg-accent-500" />
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
              onDark ? "text-accent-400" : "text-accent-500"
            }`}
          >
            {eyebrow}
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-accent-500" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 font-display font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.04] ${
            onDark ? "text-white" : "text-brand-900"
          }`}
        >
          {title}{" "}
          {outline && (
            <span className={`${onDark ? "text-outline-light" : "text-outline"}`}>
              {outline}
            </span>
          )}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 text-base md:text-lg leading-relaxed max-w-2xl ${
              onDark ? "text-brand-200" : "text-muted"
            } ${center ? "mx-auto" : ""}`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
