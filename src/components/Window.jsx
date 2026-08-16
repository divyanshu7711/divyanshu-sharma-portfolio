import React from 'react'
import { motion } from 'framer-motion'

export default function Window({ id, title, children, onClose, onMinimize, onFocus, zIndex, initialPos = { x: 120, y: 80 }, width = 480 }) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      onMouseDown={() => onFocus(id)}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.3, x: -400, y: 400, transition: { duration: 0.35 } }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        top: initialPos.y,
        left: initialPos.x,
        width,
        zIndex,
        maxHeight: '75vh',
      }}
      className="rounded-xl overflow-hidden shadow-2xl frosted flex flex-col"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-black/30 cursor-move" style={{ touchAction: 'none' }}>
        <button
          onClick={() => onClose(id)}
          className="traffic-light bg-[#ff5f57] hover:brightness-90"
          aria-label="Close"
        />
        <button
          onClick={() => onMinimize(id)}
          className="traffic-light bg-[#febc2e] hover:brightness-90"
          aria-label="Minimize"
        />
        <button className="traffic-light bg-[#28c840] hover:brightness-90" aria-label="Maximize" />
        <span className="ml-2 text-white/90 text-xs font-medium truncate">{title}</span>
      </div>
      <div className="p-4 overflow-y-auto text-white bg-black/10" style={{ maxHeight: 'calc(75vh - 36px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
