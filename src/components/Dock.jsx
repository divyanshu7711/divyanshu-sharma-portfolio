import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData.js'
import { projectIconMap, FolderIcon, GridIcon, DownloadIcon, MailIcon } from './icons.jsx'

function DockItem({ children, label, onClick, href }) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.35, y: -10 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="w-12 h-12 rounded-xl overflow-hidden shadow-lg cursor-pointer relative group"
    >
      {children}
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </motion.div>
  )

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer">{content}</a>
  }
  return <div onClick={onClick}>{content}</div>
}

export default function Dock({ onOpenProfile, onOpenLaunchpad, onDownloadResume, mailtoLink }) {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-end gap-3 px-4 py-2 rounded-2xl frosted shadow-2xl">
      {projects.map((p) => (
        <DockItem key={p.id} label={p.name} href={p.url}>
          {projectIconMap[p.icon]({ className: 'w-full h-full' })}
        </DockItem>
      ))}

      <DockItem label="Profile" onClick={onOpenProfile}>
        <FolderIcon />
      </DockItem>

      <div className="w-px h-10 bg-white/30 mx-1" />

      <DockItem label="Launchpad" onClick={onOpenLaunchpad}>
        <GridIcon />
      </DockItem>

      <DockItem label="Resume" onClick={onDownloadResume}>
        <DownloadIcon />
      </DockItem>

      <DockItem label="Contact" href={mailtoLink}>
        <MailIcon />
      </DockItem>
    </div>
  )
}
