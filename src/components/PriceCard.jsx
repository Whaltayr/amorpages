import React from "react";

export default function PriceCard({
  title,
  description = "",
  price,
  features = [],
  highlighted = false,
  ctaLabel = "Encomendar",
  slug,
}) {
  const isDeluxe = slug === "deluxe";

  // 1. DEFINE COLORS
  // Deluxe gets the Blue Diamond colors. 
  // Highlighted gets your custom gradient/pink.
  // Standard gets the white opacity.
  const borderColor = isDeluxe
    ? "border-[#3587a4] shadow-[0_0_15px_rgba(53,135,164,0.3)]" // Added a blue glow for Deluxe
    : highlighted
    ? "border-grad-cta1 bg-dark"
    : "border-white/40 bg-dark/10";

  const bulletColor = isDeluxe ? "text-[#3587a4]" : "text-grad-cta1";

  const buttonStyles = isDeluxe
    ? "bg-[#3587a4] text-white hover:bg-[#2e86ab]" // Deluxe Button
    : highlighted
    ? "bg-grad-cta1 text-white hover:bg-grad-cta1/70" // Premium Button
    : "text-white-1 bg-grad-cta2 hover:bg-grad-cta2/70"; // Basic Button

  return (
    <article
      // 2. USE THE borderColor VARIABLE HERE
      className={`max-w-67 group relative rounded-3xl p-6 shadow-sm hover:-translate-y-3 transition-transform transform flex flex-col h-full border ${
        highlighted ? "md:scale-105 z-10" : ""
      } ${borderColor}`}
      aria-labelledby={`price-${slug}`}
    >
      {/* Badge for Premium */}
      {highlighted && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-max">
          <div className="text-xs bg-grad-cta1 text-white px-3 py-1 rounded-full shadow-lg">
            Mais escolhido
          </div>
        </div>
      )}

      {/* Optional: Badge for Deluxe (Diamonds) */}
      {isDeluxe && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-max">
          <div className="text-xs bg-diamond2 text-white px-3 py-1 rounded-full shadow-lg font-bold tracking-wide">
            💎 EXCLUSIVO
          </div>
        </div>
      )}

      <header className="mb-4 text-center">
        <h3 id={`price-${slug}`} className="text-xl font-semibold text-white">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        )}
        <div className="mt-2 text-2xl font-extrabold text-white opacity-90">
          {price}
        </div>
      </header>

      <ul className="text-sm text-gray-400 space-y-2 mb-6 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // 3. USE THE bulletColor VARIABLE HERE
              className={`w-4 h-4 mt-1 shrink-0 ${bulletColor}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Button Container */}
      <div className="mt-auto w-full">
        <a
          href={`https://wa.me/258XXXXXXXXX?text=${encodeURIComponent(
            `Olá! Quero o pacote ${title} para o template ${slug}. Nome: __; Data: __.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          // 4. USE THE buttonStyles VARIABLE HERE
          className={`w-full inline-block text-center px-4 py-2 rounded-md transition-colors ${buttonStyles}`}
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}