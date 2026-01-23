
import React from 'react'

export default function TemplateCard({title, subtitle='', thumb = '/clients/c-demo-1/thumb.webp', slug, tag, highlighted=false}){
    return(
        <a 
            href={`/clients/${slug}/`}
            className={`group relative rounded-xl overflow-hidden shadow-sm block ${highlighted ? 'md:scale-105 z-10' : ''}`}
        >
            <img src={thumb} alt={`${title} thumbnail`} className="w-full h-48 object-cover" loading="lazy" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {/* CHANGED: Replaced <a> with <span> so we don't have nested links.
                   The styling remains the same so it still looks like a button. 
                */}
                <span
                    className="px-4 py-2 bg-white/90 text-sm font-medium rounded-md shadow-sm"
                >
                    Ver demo
                </span>
            </div>

            <div className="p-4 bg-white">
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    {tag && <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded">{tag}</span>}
                </div>

                {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
            </div>
        </a>
    )
}