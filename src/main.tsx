import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { SmallNavbarProvider } from './providers/SmallNavbarProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmallNavbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SmallNavbarProvider>
  </StrictMode>,
)
