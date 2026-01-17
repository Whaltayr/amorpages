import React from 'react'
import WhatsappIcon from '../assets/icon/whatsapp-white.svg'

export default function Header() {
  return (
    <header className="w-full bg-white-1/30 backdrop-blur-2xl  shadow-sm font-montserrat sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-grad1 to-grad2">
            LoveLive
          </span>
        </a>

        {/* Navigation - Hidden on 'sm' and smaller, shown on 'md' and up */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-pink-600 font-medium transition-colors">Como funciona</a>
          <a href="#templates" className="hover:text-pink-600 font-medium transition-colors">Templates</a>
          <a href="#pacotes" className="hover:text-pink-600 font-medium transition-colors">Pacotes</a>
          <a href="#faq" className="hover:text-pink-600 font-medium transition-colors">FAQ</a>
        </nav>

        {/* Action Button - Always Shown */}
        <div className="flex items-center">
          <a 
            href="https://wa.me/258XXXXXXXXX?text=Ol%C3%A1%2C%20quero%20encomendar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-4 py-2 bg-linear-to-r from-grad-cta1 to-grad-cta2 text-white rounded-[30px] text-sm font-medium transition-transform active:scale-95 shadow-md"
          >
            {/* Oculta parte do texto em telas muito pequenas para não apertar o layout */}
            <span>Falar no Whatsapp</span>
            <img src={WhatsappIcon} alt="whatsappicon" className='w-4 h-4' />
          </a>
        </div>
      </div>
    </header>
  )
}