import React from 'react'
import TemplateCard from './TemplateCard'

export default function TemplatesSection() {
  const templates = [
    { title: 'Rosa Romântico', subtitle: 'Fotos em destaque e tipografia suave.', thumb: '/clients/c-demo-1/thumb.webp', slug: 'c-demo-1', tag: 'Básico' },
    { title: 'Minimal Clean', subtitle: 'Design limpo e foco no texto.', thumb: '/clients/c-demo-2/thumb.webp', slug: 'c-demo-2', tag: 'Básico' },
    { title: 'Vintage', subtitle: 'Tons quentes e ornamentos clássicos.', thumb: '/clients/c-demo-3/thumb.webp', slug: 'c-demo-3', tag: 'Básico' },
    { title: 'Polaroid', subtitle: 'Galeria em mosaico, estilo instant.', thumb: '/clients/c-demo-4/thumb.webp', slug: 'c-demo-4', tag: 'Básico' },
    { title: 'Storyline', subtitle: 'Linha do tempo visual e momentos-chave.', thumb: '/clients/c-demo-5/thumb.webp', slug: 'c-demo-5', tag: 'Básico' },
    { title: 'Premium – Cinematic', subtitle: 'Animações suaves e layout dinâmico.', thumb: '/clients/c-demo-premium/thumb.webp', slug: 'c-demo-premium', tag: 'Premium', highlighted: true },
    { title: 'Deluxe – Exclusivo', subtitle: 'Design personalizado e extras físicos.', thumb: '/clients/c-demo-deluxe/thumb.webp', slug: 'c-demo-deluxe', tag: 'Deluxe' }
  ]

  return (
    <section id="templates" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Templates prontos para inspirar</h2>
        <p className="text-center text-gray-600 mb-8">Escolha um visual; nós personalizamos com as vossas fotos, carta e música.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div key={t.slug} className={`${t.highlighted ? 'lg:row-span-1' : ''}`}>
              <TemplateCard {...t} highlighted={t.highlighted} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          * Passe o cursor sobre um cartão para ver a demo. (No telemóvel, toque no cartão.)
        </div>
      </div>
    </section>
  )
}
