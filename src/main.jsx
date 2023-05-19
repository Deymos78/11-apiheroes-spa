import React from 'react'
import ReactDOM from 'react-dom/client'
import { APIHeroesApp } from './APIHeroesApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El BrowseRuter nos sirve para un enrutamiento declarativo, lo que nos permite definir diferentes rutas en nuestra aplicacion y 
      renderizar  componentes especificos segun la URL actual */}
    {/* Al momento de envolver nuestra aplicacion dentro de las etieuqtas <BrowseRouter> podemos establecer una configuracion de enrutamiento
      para que React Router pueda manejar nuestras diferentes rutas y mostrar los componente correspondientes segun nuestra URL */}
    <BrowserRouter>
    {/* NUESTRO COMPONENTE FUNCIONAL QUE TENDRA TODO EL ENRUTAMIENTO */}
      <APIHeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
