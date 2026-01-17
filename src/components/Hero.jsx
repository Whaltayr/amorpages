import React from "react"
import HeroImage from '../assets/hero-image.png'
import ClockCount from './ClockCount'

export default function Hero(){
    return(
        // 1. Mudamos para flex-col (celular) e md:flex-row (desktop)
        // 2. Ajustamos o padding para não colar nas bordas no mobile (py-12 px-6)
        <section id="hero" className="min-h-screen flex items-center bg-white">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10 md:gap-12">
                
                {/* Lado do Texto: Centralizado no mobile, esquerda no desktop */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight md:leading-12 max-w-xl mx-auto md:mx-0">
                        Uma página só para o vosso amor pessoal, íntima e inesquecível.
                    </h1>
                    
                    <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
                        Crie um cartão digital com fotos, carta e a playlist do Spotify; personalizado por nós e pronto para partilhar. Entrega rápida, emoção garantida.
                    </p>

                    {/* Botões: Stack no mobile muito pequeno, row no resto */}
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 items-center">
                        <a href="#templates" className="bg-linear-to-r from-grad-cta1 to-grad-cta2 text-white rounded-[30px] py-3 px-6 shadow-xl hover:scale-105 transition-transform inline-block text-sm font-semibold">
                            Explorar Templates
                        </a>
                        <a href="#pacotes" className="border rounded-[30px] py-3 px-6 border-grad-cta1 text-grad-cta1 hover:bg-pink-50 transition-colors text-sm font-semibold">
                            Ver Pacotes
                        </a>
                    </div>

                    <div className="mt-10">
                        <ClockCount/>
                    </div>
                </div>

                {/* Lado da Imagem: Aparece primeiro no mobile (opcional) */}
                <div className="flex-1 order-1 md:order-2 w-full max-w-[300px] md:max-w-none">
                    <img 
                        src={HeroImage} 
                        alt="Preview do site de namoro" 
                        className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                    />
                </div>
            </div>
        </section>
    )
}   