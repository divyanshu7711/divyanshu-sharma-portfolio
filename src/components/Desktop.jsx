import React, { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import MenuBar from './MenuBar.jsx'
import Dock from './Dock.jsx'
import Window from './Window.jsx'
import Launchpad from './Launchpad.jsx'
import ProfileFolder from './ProfileFolder.jsx'
import EducationApp from './EducationApp.jsx'
import ExperienceApp from './ExperienceApp.jsx'
import { projects, mailtoLink } from '../data/portfolioData.js'
import { FolderIcon, projectIconMap } from './icons.jsx'

const APP_META = {
  profile: { title: 'Profile', component: ProfileFolder, width: 420 },
  education: { title: 'Education', component: EducationApp, width: 420 },
  experience: { title: 'Experience', component: ExperienceApp, width: 460 },
}

let winCounter = 0

export default function Desktop() {
  const [windows, setWindows] = useState([])
  const [launchpadOpen, setLaunchpadOpen] = useState(false)
  const [topZ, setTopZ] = useState(10)

  const openWindow = useCallback((type) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.type === type)
      if (existing) {
        setTopZ((z) => z + 1)
        return prev.map((w) => (w.type === type ? { ...w, zIndex: topZ + 1, minimized: false } : w))
      }
      winCounter += 1
      const newZ = topZ + 1
      setTopZ(newZ)
      return [
        ...prev,
        {
          id: `${type}-${winCounter}`,
          type,
          zIndex: newZ,
          minimized: false,
          pos: { x: 100 + prev.length * 30, y: 70 + prev.length * 30 },
        },
      ]
    })
    setLaunchpadOpen(false)
  }, [topZ])

  const closeWindow = (id) => setWindows((prev) => prev.filter((w) => w.id !== id))
  const minimizeWindow = (id) =>
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)))
  const focusWindow = (id) => {
    setTopZ((z) => {
      const nz = z + 1
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex: nz } : w)))
      return nz
    })
  }

  const activeApp = windows.filter((w) => !w.minimized).sort((a, b) => b.zIndex - a.zIndex)[0]

  return (
    <div className="w-screen h-screen overflow-hidden relative wallpaper-desktop">
      <MenuBar activeApp={activeApp ? APP_META[activeApp.type]?.title : 'Divyanshu Sharma'} />

      {/* Desktop icons */}
      <div className="absolute top-10 left-6 flex flex-col gap-6">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 w-20 group"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
              {projectIconMap[p.icon]({ className: 'w-full h-full' })}
            </div>
            <span className="text-white text-xs text-center drop-shadow-md">{p.name}</span>
          </a>
        ))}

        <button
          onClick={() => openWindow('profile')}
          className="flex flex-col items-center gap-1 w-20 group"
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
            <FolderIcon />
          </div>
          <span className="text-white text-xs text-center drop-shadow-md">Profile</span>
        </button>
      </div>

      <AnimatePresence>
        {windows
          .filter((w) => !w.minimized)
          .map((w) => {
            const meta = APP_META[w.type]
            const Content = meta.component
            return (
              <Window
                key={w.id}
                id={w.id}
                title={meta.title}
                zIndex={w.zIndex}
                initialPos={w.pos}
                width={meta.width}
                onClose={closeWindow}
                onMinimize={minimizeWindow}
                onFocus={focusWindow}
              >
                <Content />
              </Window>
            )
          })}
      </AnimatePresence>

      <Launchpad
        open={launchpadOpen}
        onClose={() => setLaunchpadOpen(false)}
        onOpenApp={openWindow}
      />

      <Dock
        onOpenProfile={() => openWindow('profile')}
        onOpenLaunchpad={() => setLaunchpadOpen(true)}
        onDownloadResume={() => {
          const link = document.createElement('a')
          link.href = './resume.pdf'
          link.download = 'Divyanshu_Sharma_Resume.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }}
        mailtoLink={mailtoLink}
      />
    </div>
  )
}
