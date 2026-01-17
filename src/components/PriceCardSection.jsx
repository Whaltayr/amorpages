import React from "react";
import PriceCard from "./PriceCard";

export default function PricingSection() {
  const packs = [
    {
      title: "Básico",
      description: "Simples e especial, perfeito para surpreender.",
      price: "5.000 AOA",
      features: [
        "5 templates à escolha",
        "Até 10 fotos",
        "1 música do Spotify",
        "Carta de amor",
        "Entrega em 24h",
      ],
      slug: "basico",
    },
    {
      title: "Premium",
      description: "Completo e emocionante o mais escolhido.",
      price: "12.000 AOA",
      features: [
        "Tudo do Básico",
        "Até 30 fotos + 1 vídeo",
        "Timeline do relacionamento",
        "Cores personalizadas",
        "Animações suaves",
        "Entrega em 48h",
      ],
      slug: "premium",
      highlighted: true,
    },
    {
      title: "Deluxe",
      description: "Exclusivo e único, para quem quer algo memorável.",
      price: "25.000 AOA",
      features: [
        "Tudo do Premium",
        "Design 100% exclusivo",
        "Fotos ilimitadas",
        "Quiz interativo",
        "QR Code em cartão físico",
        "Entrega em 72h",
      ],
      slug: "deluxe",
      
    },
  ];

  return (
    <section id="pacotes" className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Escolha o presente ideal
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Do simples e romântico ao exclusivo — um pacote para cada história.
        </p>

        <div className="grid gap-6 md:grid-cols-3 items-stretch ">
          {packs.map((p) => (
            <div key={p.slug} className="flex">
              <PriceCard {...p} />
            </div>
          ))}
        </div>

        {/* métodos de pagamento */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50/20 border border-white-1/30 p-4  rounded-4xl ">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Aceitamos:</span>
            <p>Multicaixa Express</p>
            <p>Transferencia Bancaria</p>
          </div>

          <div className="text-sm text-gray-500">
            Pagamentos por transferência, Multicaixa ou confirmação via
            WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
}
