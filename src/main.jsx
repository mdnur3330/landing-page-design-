import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LayoutLandingPage from './rootLayout/LayoutLandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutLandingPage />
  </StrictMode>,
)
