import { img } from "@/lib/assets"

interface MarqueeProps {
  items: { name: string; logo: string }[]
}

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee py-2">
      <div className="marquee-track">
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center justify-center px-8 md:px-12 shrink-0"
            title={client.name}
          >
            <img
              src={img(`/images/logos/${client.logo}`)}
              alt={client.name}
              loading="lazy"
              className="h-9 md:h-11 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
