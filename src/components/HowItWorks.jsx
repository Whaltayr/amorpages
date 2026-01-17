import React from "react";
import StepIcon1 from "../assets/icon/card-1.svg";
import StepIcon2 from "../assets/icon/card-2.svg";
import StepIcon3 from "../assets/icon/card-3.svg";

function Step({ icon, number, title, children }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div
        className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 mb-3"
        aria-hidden
      >
        <img src={icon} alt="" className="w-8 h-" />
      </div>
      <div className="text-grad-cta2 font-semibold mb-1 ">Passo {number}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="py-40 bg-linear-120 from-gr-h1 to-gr-h2">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Como funciona</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Rápido, claro e sem complicações criamos a página, você aprova e
          partilha.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Step icon={StepIcon1} number={1} title="Escolha">
            Escolha um template e o pacote que mais combina com a vossa
            história.
          </Step>

          <Step icon={StepIcon2} number={2} title="Personalize">
            Envie fotos, carta e link Spotify por WhatsApp; nós montamos a
            página com carinho.
          </Step>

          <Step icon={StepIcon3} number={3} title="Receba">
            Receba o preview, peça até 2 revisões; aprovado, enviamos o link
            final pronto para partilhar.
          </Step>
        </div>
      </div>
    </section>
  );
}
