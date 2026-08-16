import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, mailtoLink } from '../data/portfolioData.js'
import { projectIconMap, FolderIcon, GridIcon, DownloadIcon, MailIcon, BookIcon, BriefcaseIcon } from './icons.jsx'
import ProfileFolder from './ProfileFolder.jsx'
import EducationApp from './EducationApp.jsx'
import ExperienceApp from './ExperienceApp.jsx'

const homeApps = [
  ...projects.map((p) => ({ id: p.id, name: p.name, icon: projectIconMap[p.icon], url: p.url })),
  { id: 'profile', name: 'Profile', icon: (props) => <FolderIcon {...props} /> },
]

export default function MobileHome() {
  const [modal, setModal] = useState(null) // 'profile' | 'launchpad'
  const [sheetApp, setSheetApp] = useState(null) // 'education' | 'experience'

  const handleAppTap = (app) => {
    if (app.url) {
      window.open(app.url, '_blank', 'noopener,noreferrer')
    } else {
      setModal(app.id)
    }
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative wallpaper-mobile flex flex-col">
      <div className="flex-1 pt-14 px-6">
        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
          {homeApps.map((app) => (
            <button
              key={app.id}
              onClick={() => handleAppTap(app)}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
                {app.icon({ className: 'w-full h-full' })}
              </div>
              <span className="text-white text-[11px] text-center drop-shadow-md leading-tight">
                {app.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="pb-6 px-6">
        <div className="flex items-center justify-around py-3 rounded-3xl frosted shadow-2xl">
          <button onClick={() => setModal('launchpad')} className="w-12 h-12 rounded-xl overflow-hidden">
            <GridIcon />
          </button>
          <button
            onClick={() => {
              const link = document.createElement('a')
              link.href = './resume.pdf'
              link.download = 'Divyanshu_Sharma_Resume.pdf'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
            className="w-12 h-12 rounded-xl overflow-hidden"
          >
            <DownloadIcon />
          </button>
          <a href={mailtoLink} className="w-12 h-12 rounded-xl overflow-hidden">
            <MailIcon />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {modal === 'profile' && (
          <SlideUpModal title="Profile" onClose={() => setModal(null)}>
            <ProfileFolder />
          </SlideUpModal>
        )}
        {modal === 'launchpad' && (
          <SlideUpModal title="Launchpad" onClose={() => setModal(null)}>
            <div className="flex gap-8 justify-center pt-4">
              <button onClick={() => setSheetApp('education')} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg"><BookIcon /></div>
                <span className="text-white text-sm">Education</span>
              </button>
              <button onClick={() => setSheetApp('experience')} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg"><BriefcaseIcon /></div>
                <span className="text-white text-sm">Experience</span>
              </button>
            </div>
          </SlideUpModal>
        )}
        {sheetApp === 'education' && (
          <SlideUpModal title="Education" onClose={() => setSheetApp(null)}>
            <EducationApp />
          </SlideUpModal>
        )}
        {sheetApp === 'experience' && (
          <SlideUpModal title="Experience" onClose={() => setSheetApp(null)}>
            <ExperienceApp />
          </SlideUpModal>
        )}
      </AnimatePresence>
    </div>
  )
}

function SlideUpModal({ title, children, onClose }) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0, bottom: 0.5 }}
      onDragEnd={(e, info) => {
        if (info.offset.y > 120) onClose()
      }}
      className="fixed inset-0 z-[200] frosted-dark text-white flex flex-col rounded-t-3xl mt-10 shadow-2xl"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <button onClick={onClose} className="text-blue-300 text-sm">Back</button>
        <h2 className="font-semibold text-sm">{title}</h2>
        <div className="w-10" />
      </div>
      <div className="flex-1 overflow-y-auto p-5">{children}</div>
    </motion.div>
  )
}
