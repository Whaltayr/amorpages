import React from "react"
import HeroImage from '../assets/hero-image.png'
import ClockCount from './ClockCount'

export default function Hero(){
    return(
        // Adicionamos overflow-hidden para evitar qualquer scroll horizontal acidental em telas de 290px
        <section id="hero" className="min-h-screen flex items-center bg-white overflow-hidden">
            {/* 1. Reduzi px-6 para px-4 em telas muito pequenas (abaixo de sm) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                {/* Lado do Texto: Ordem 2 no mobile */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1 w-full">
                    {/* 2. Ajuste de fonte: text-2xl para telas < 390px, text-3xl para mobile padrão e md:text-5xl para desktop */}
                    <h1 className="font-montserrat text-2xl sm:text-3xl md:text-5xl font-bold leading-tight md:leading-12 max-w-xl mx-auto md:mx-0">
                        Uma página só para o vosso amor pessoal, íntima e inesquecível.
                    </h1>
                    
                    <p className="mt-6 text-gray-600 max-w-lg mx-auto md:mx-0 text-xs sm:text-sm md:text-base px-2 sm:px-0">
                        Crie um cartão digital com fotos, carta e a playlist do Spotify; personalizado por nós e pronto para partilhar. Entrega rápida, emoção garantida.
                    </p>

                    {/* 3. Botões: Em 290px eles precisam empilhar (flex-col) para não vazar da tela */}
                    <div className="mt-8 flex flex-col xs:flex-row justify-center md:justify-start gap-3 sm:gap-4 items-center">
                        <a href="#templates" className="w-full xs:w-auto bg-linear-to-r from-grad-cta1 to-grad-cta2 text-white rounded-[30px] py-3 px-6 shadow-xl hover:scale-105 transition-transform inline-block text-sm font-semibold whitespace-nowrap">
                            Explorar Templates
                        </a>
                        <a href="#pacotes" className="w-full xs:w-auto border rounded-[30px] py-3 px-6 border-grad-cta1 text-grad-cta1 hover:bg-pink-50 transition-colors text-sm font-semibold whitespace-nowrap">
                            Ver Pacotes
                        </a>
                    </div>

                    {/* Container do ClockCount: Garantindo que não quebre o layout interno */}
                    <div className="mt-10 w-full overflow-hidden">
                        <ClockCount/>
                    </div>
                </div>

                {/* Lado da Imagem: Ordem 1 no mobile */}
                {/* Ajustamos o max-w para garantir que a imagem não esmague o texto em 290px */}
                <div className="flex-1 order-1 md:order-2 w-full max-w-[250px] sm:max-w-[320px] md:max-w-none">
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