import React, { useState } from 'react'

const faqs = [
  {
    q: 'Quanto tempo demora a entrega?',
    a: 'Básico: até 24h · Premium: até 48h · Deluxe: até 72h. Prazo contado a partir da confirmação do pagamento e recebimento de todos os conteúdos (fotos, carta, música).'
  },
  {
    q: 'Quantas revisões estão incluídas?',
    a: 'Incluímos até 2 revisões gratuitas. Revisões adicionais podem ser cobradas conforme a complexidade.'
  },
  {
    q: 'Como envio as fotos e a música?',
    a: 'Envia tudo pelo WhatsApp: fotos em alta resolução e o link da playlist/track do Spotify. Nós organizamos e optimizamos as imagens para web.'
  },
  {
    q: 'Posso mudar as cores ou o texto depois de aprovar?',
    a: 'Pequenas alterações podem ser feitas mediante pedido — grandes mudanças após aprovação são tratadas como revisão com possível custo adicional.'
  },
  {
    q: 'As fotos ficam públicas?',
    a: 'Não. As páginas são partilhadas apenas via link. Guardamos fotos apenas enquanto necessário; podemos apagar a pedido do cliente.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="py-16 bg-gr-h1">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 font-montserrat">Perguntas frequentes</h2>
        <p className="text-center text-gray-600 mb-8 font-montserrat">Respostas diretas para dúvidas comuns se faltar algo, responde no WhatsApp.</p>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className="border border-gray-100 font-inter rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="ml-4 text-grad-cta1 font-semibold">{isOpen ? '−' : '+'}</span>
                </button>

                <div
                  className={`px-5 pb-4 transition-[max-height,opacity] duration-300 ease-in-out bg-white ${isOpen ? 'pt-0' : 'hidden'}`}
                  aria-hidden={!isOpen}
                >
                  <p className="text-sm text-gray-700">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
