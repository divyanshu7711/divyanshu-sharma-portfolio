import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookIcon, BriefcaseIcon } from './icons.jsx'

export default function Launchpad({ open, onClose, onOpenApp }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          onClick={onClose}
        >
          <div className="flex gap-12" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onOpenApp('education')}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-xl transition-transform group-hover:scale-110">
                <BookIcon />
              </div>
              <span className="text-white text-sm font-medium">Education</span>
            </button>

            <button
              onClick={() => onOpenApp('experience')}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-xl transition-transform group-hover:scale-110">
                <BriefcaseIcon />
              </div>
              <span className="text-white text-sm font-medium">Experience</span>
            </button>
          </div>
          <p className="text-white/50 text-xs">Click anywhere outside the icons to close</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
