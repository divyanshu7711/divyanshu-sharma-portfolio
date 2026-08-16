import React from 'react'
import { experience, achievements } from '../data/portfolioData.js'
import { BriefcaseIcon } from './icons.jsx'

export default function ExperienceApp() {
  return (
    <div className="space-y-5">
      {experience.map((exp) => (
        <div key={exp.title} className="flex gap-3 items-start bg-white/10 rounded-lg p-3">
          <div className="w-10 h-10 shrink-0"><BriefcaseIcon /></div>
          <div>
            <h3 className="font-semibold text-sm">{exp.title}</h3>
            <p className="text-sm text-white/80">{exp.company}</p>
            <ul className="list-disc list-inside text-xs text-white/70 mt-1 space-y-1">
              {exp.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      ))}

      <div>
        <h3 className="text-sm font-semibold mb-2 text-white/80">Achievements</h3>
        <ul className="list-disc list-inside text-xs text-white/80 space-y-1">
          {achievements.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </div>
  )
}
