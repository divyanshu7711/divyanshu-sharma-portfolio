import React from 'react'
import { profile, skills } from '../data/portfolioData.js'

export default function ProfileFolder() {
  const initials = profile.name.split(' ').map((n) => n[0]).join('')
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-br from-indigo-400 to-pink-400 text-white shadow-lg">
          {initials}
        </div>
        <div>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="text-sm text-white/70">{profile.role}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-white/90">{profile.bio}</p>

      <div>
        <h3 className="text-sm font-semibold mb-2 text-white/80">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="text-xs px-2 py-1 rounded-full bg-white/15 border border-white/10">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2 text-white/80">Links</h3>
        <div className="flex flex-col gap-1 text-sm">
          <a className="text-blue-300 hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-blue-300 hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="text-blue-300 hover:underline" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a>
        </div>
      </div>
    </div>
  )
}
