import React from "react"
import HeroImage from '../assets/hero-image.png'
import ClockCount from './ClockCount'

export default function Hero(){
    return(
        <section id="hero" className="min-h-screen flex items-center bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                {/* Lado do Texto */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1 w-full">
                    <h1 className="font-montserrat text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-xl mx-auto md:mx-0">
                        Uma página só para o vosso amor pessoal, íntima e inesquecível.
                    </h1>
                    
                    <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0 text-[13px] sm:text-sm md:text-base px-2 sm:px-0">
                        Crie um cartão digital com fotos, carta e a playlist do Spotify; personalizado por nós e pronto para partilhar. Entrega rápida, emoção garantida.
                    </p>

                    {/* Container de Botões: Centralizado e com escala menor no mobile */}
                    <div className="mt-8 flex flex-col items-center justify-center md:justify-start sm:flex-row gap-3 sm:gap-4">
                        <a 
                            href="#templates" 
                            className="w-fit min-w-[160px] bg-linear-to-r from-grad-cta1 to-grad-cta2 text-white rounded-[30px] py-2.5 px-5 sm:py-3 sm:px-6 shadow-xl hover:scale-105 transition-transform inline-block text-[13px] sm:text-sm font-semibold whitespace-nowrap"
                        >
                            Explorar Templates
                        </a>
                        <a 
                            href="#pacotes" 
                            className="w-fit min-w-[160px] border rounded-[30px] py-2.5 px-5 sm:py-3 sm:px-6 border-grad-cta1 text-grad-cta1 hover:bg-pink-50 transition-colors text-[13px] sm:text-sm font-semibold whitespace-nowrap"
                        >
                            Ver Pacotes
                        </a>
                    </div>

                    <div className="mt-10 w-full flex justify-center md:justify-start">
                        <div className="w-full max-w-[320px] md:max-w-none">
                           <ClockCount/>
                        </div>
                    </div>
                </div>

                {/* Lado da Imagem */}
                <div className="flex-1 order-1 md:order-2 w-full flex justify-center">
                    <div className="max-w-[220px] sm:max-w-[300px] md:max-w-none">
                        <img 
                            src={HeroImage} 
                            alt="Preview do site" 
                            className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}