// Importación de las librerías principales de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importación de los estilos globales y del componente principal
import './index.css'
import App from './App.jsx'

// Renderiza la aplicación dentro del elemento con id "root"
createRoot(document.getElementById('root')).render(

  // StrictMode ayuda a detectar posibles errores durante el desarrollo
  <StrictMode>

    {/* Componente principal de la aplicación */}
    <App />

  </StrictMode>,

)