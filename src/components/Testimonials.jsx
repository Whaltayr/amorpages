import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const data = [
  {
    id: "t1",
    name: "Ana Silva",
    role: "Cliente",
    quote: "Surpreendeu o meu namorado — ficou emocionado. Entrega rápida e muito cuidado com as fotos.",
    avatar: "/avatars/test2.webp",
    rating: 5
  },
  {
    id: "t2",
    name: "João Costa",
    role: "Cliente",
    quote: "Design lindo e o processo foi super simples. Recomendo a quem quer algo pessoal.",
    avatar: "/avatars/test1.webp",
    rating: 5
  },
  {
    id: "t3",
    name: "Mariana Lopes",
    role: "Cliente",
    quote: "O template Premium ficou perfeito. As animações são subtis e muito elegantes.",
    avatar: "/avatars/test3.webp",
    rating: 5
  },
];

export default function Testimonials() {
  // Configuração do Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 5000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <section id="testimonials" className="py-20 bg-gr-h2 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl text-dark font-semibold">
            O que os nossos clientes dizem
          </h2>
          <p className="font-inter mt-4 text-lg md:text-xl max-w-2xl mx-auto text-dark/70">
            Pequenas histórias, grandes emoções.
          </p>
        </div>

        {/* Viewport do Carrossel */}
        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {data.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] md:pl-6"
                >
                  <blockquote className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      {/* Estrelas para um ar mais profissional */}
                      <div className="flex gap-1 mb-4 text-yellow-400 text-sm">
                        {"★".repeat(item.rating)}
                      </div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                        “{item.quote}”
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-50">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-grad-cta1/10"
                      />
                      <div>
                        <div className="font-bold text-dark text-sm">{item.name}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">{item.role}</div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores (Dots) */}
          <div className="flex justify-center gap-2 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === selectedIndex ? "w-8 bg-grad-cta1" : "w-2 bg-gray-300"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}