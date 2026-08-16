import React from 'react'
import Desktop from './components/Desktop.jsx'
import MobileHome from './components/MobileHome.jsx'
import useMediaQuery from './hooks/useMediaQuery.js'

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <MobileHome /> : <Desktop />
}
