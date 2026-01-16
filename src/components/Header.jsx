import React from 'react'
import WhatsappIcon from '../assets/icon/whatsapp-white.svg'

export default function Header() {
  return (
    <header className="w-full bg-white  shadow-sm font-montserrat">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
     
          <span className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-grad1 to-grad2">AmorPages</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <a href="#how" className="hover:text-pink-600 font-medium">Como funciona</a>
          <a href="#templates" className="hover:text-pink-600 font-medium">Templates</a>
          <a href="#pacotes" className="hover:text-pink-600 font-medium">Pacotes</a>
          <a href="#faq" className="hover:text-pink-600 font-medium">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/258XXXXXXXXX?text=Ol%C3%A1%2C%20quero%20encomendar" target="_blank" rel="noopener noreferrer"
             className="hidden md:inline-flex gap-2 items-center px-4 py-2 bg-linear-to-r from-grad-cta1 to-grad-cta2 text-white rounded-[30px] text-sm font-medium">
            <span>Falar no Whatsapp </span>
            <img src={WhatsappIcon} alt="whatsappicon" className='w-4 h-4' />
          </a>
    

          <button className="lg:hidden p-2 rounded-md border border-gray-200" aria-label="Abrir menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
