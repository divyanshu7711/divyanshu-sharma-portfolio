import React, { useState, useEffect } from 'react'
import { AppleLogo } from './icons.jsx'

export default function MenuBar({ activeApp }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateStr = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div className="fixed top-0 left-0 right-0 h-7 z-50 flex items-center justify-between px-4 text-white text-sm frosted-dark select-none">
      <div className="flex items-center gap-4">
        <AppleLogo className="w-4 h-4" />
        <span className="font-semibold">{activeApp || 'Divyanshu Sharma'}</span>
      </div>
      <div className="flex items-center gap-3 text-xs opacity-90">
        <span>{dateStr}</span>
        <span className="font-medium">{timeStr}</span>
      </div>
    </div>
  )
}
