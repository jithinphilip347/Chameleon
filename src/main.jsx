import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../my-app/src/assets/css/main.css'
import '../../my-app/src/assets/css/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
