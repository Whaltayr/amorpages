import React from 'react'
import whatIcon from '../assets/icon/whatsapp-white.svg'
import BankIcon from '../assets/icon/bank.svg'
import CardIcon from '../assets/icon/card.svg'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="/" className="flex items-center gap-3 mb-3">
          
            <span className="text-lg font-semibold text-grad2">LoveLive</span>
          </a>
          <p className="text-sm text-slate-300 max-w-xs">
            Cartões digitais personalizados para o Dia dos Namorados rápidos, íntimos e fáceis de partilhar.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://wa.me/244932783626?text=Ol%C3%A1%2C%20quero%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-grad-cta1 text-white rounded"
            >
         <img src={whatIcon} className='h-4' alt="" />
              WhatsApp
            </a>
            <a href="#faq" className="text-sm text-slate-300 underline underline-offset-2">FAQ</a>
          </div>
        </div>

        {/* Links rápidos */}
        <nav aria-label="Quick links" className="text-sm">
          <h4 className="font-semibold text-slate-100 mb-3">Navegar</h4>
          <ul className="space-y-2">
            <li><a href="#pacotes" className="hover:text-white">Pacotes</a></li>
            <li><a href="#templates" className="hover:text-white">Templates</a></li>
            <li><a href="#how" className="hover:text-white">Como funciona</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testemunhos</a></li>
          </ul>
        </nav>

        {/* Pagamento / contatos */}
        <div className="text-sm">
          <h4 className="font-semibold text-slate-100 mb-3">Pagamento & contato</h4>

          <div className="flex items-center gap-3 mb-3">
            <h3 className='flex gap-2 items-center'>Multicaixa Express <img src={CardIcon} className="h-4" alt="" /></h3>
            <h3 className='flex gap-2 items-center'>Tranferencia Bancaria <img src={BankIcon} className="h-4" alt="" /></h3>
           
          </div>

          <p className="text-slate-300 mb-2">Email: <a href="mailto:josiwhatson@gmail.com" className="underline">josiwhatson@gmail.com</a></p>
          <p className="text-slate-300">Telefone: <a href="" className="underline">+244 932783626</a></p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <div>© {new Date().getFullYear()} AmorPages. Todos os direitos reservados.</div>
          <div className="mt-2 md:mt-0">Feito com ❤️  Política de privacidade</div>
        </div>
      </div>
    </footer>
  )
}
