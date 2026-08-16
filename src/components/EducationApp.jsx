import React from 'react'
import { education } from '../data/portfolioData.js'
import { BookIcon } from './icons.jsx'

export default function EducationApp() {
  return (
    <div className="space-y-4">
      {education.map((ed) => (
        <div key={ed.degree} className="flex gap-3 items-start bg-white/10 rounded-lg p-3">
          <div className="w-10 h-10 shrink-0"><BookIcon /></div>
          <div>
            <h3 className="font-semibold text-sm">{ed.degree}</h3>
            <p className="text-sm text-white/80">{ed.institute}</p>
            <p className="text-xs text-white/60">{ed.detail} · {ed.period}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
