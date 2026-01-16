import React from "react"
import HeroImage from '../assets/hero-image.png'

export default function Hero(){
    return(
        <section id="hero" className="flex gap-14">
            <div className="max-w-6xl mx-auto px-6 py-2 flex items-center gap-12">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold leading-tight max-w-xl">Uma página só para o vosso amor pessoal, íntima e inesquecível.</h1>
                    <p className="mt-6 text-gray-600 max-w-lg"> Crie um cartão digital com fotos, carta e a playlist do Spotify; personalizado por nós e pronto para partilhar. Entrega rápida, emoção garantida.</p>
                <div className="mt-8 flex gap-3 items-center ">
                    <a href="#templates" className=" bg-linear-to-r from-grad-cta1 to-grad-cta2 text-white rounded-[30px] py-2 px-5 shadow-2xl">Explorar Templates</a>
                    <a href="#pacotes" className="border rounded-[30px] py-2 px-5  border-grad-cta1">Ver Pacotes</a>
                </div>
                </div>

                <div>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </section>
    )
}