import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="/" className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">A</div>
            <span className="text-lg font-semibold">AmorPages</span>
          </a>
          <p className="text-sm text-slate-300 max-w-xs">
            Cartões digitais personalizados para o Dia dos Namorados — rápidos, íntimos e fáceis de partilhar.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://wa.me/258XXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-pink-600 text-white rounded"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 11.5a9 9 0 1 1-4.5-7.8L21 2v9.5z" fill="currentColor" opacity="0.12"></path>
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.967-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.787-1.48-1.77-1.653-2.068-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.672-1.62-.92-2.221-.242-.58-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0 0 .262.11.47.11.198 0 .32-.074.445-.12.132-.047 1.758-.717 2.006-1.413.248-.696.248-1.292.173-1.414-.074-.124-.272-.198-.57-.347z" fill="currentColor"></path>
              </svg>
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
            <img src="/src/assets/icons/multicaixa.svg" alt="Multicaixa" className="h-6" />
            <img src="/src/assets/icons/visa.svg" alt="Visa" className="h-6" />
           
          </div>

          <p className="text-slate-300 mb-2">Email: josiwhatson@gmail.com<a href="mailto:josiwhatson@gmail.com" className="underline">josiwhatson@gmail.com</a></p>
          <p className="text-slate-300">Telefone: 932783626<a href="tel:+244932783626" className="underline">+244 932783626</a></p>
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
