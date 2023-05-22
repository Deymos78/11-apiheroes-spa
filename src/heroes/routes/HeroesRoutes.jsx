import { Route, Routes } from "react-router-dom"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { SearchPage } from "../pages/SearchPage"
import { NavBar } from "../../userInterface/components/NavBar"
import { HeroPage } from "../pages/HeroPage"

export const HeroesRoutes = () => {
  return (
    // EN ESTE COMPONENTE SI SE MOSTRARA LA BARRA DE NAVEGACION
    <>
        <NavBar/>

            <Routes>

                <Route path="marvel" element={ <MarvelPage/> }/>

                <Route path="dc" element={ <DcPage/> }/>
                
                <Route path="search" element={ <SearchPage/> }/>

                {/* Definimos un parametro variable en la URL donde se asociara a una valor que se le pase por url */}
                <Route path="hero/.id" element={ <HeroPage/> }/>

            </Routes>
    
    </>
  )
}
