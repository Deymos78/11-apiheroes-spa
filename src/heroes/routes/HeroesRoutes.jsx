import { Route, Routes } from "react-router-dom"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DcPage"
import { SearchPage } from "../pages/SearchPage"
import { NavBar } from "../../userInterface/components/NavBar"

export const HeroesRoutes = () => {
  return (
    // EN ESTE COMPONENTE SI SE MOSTRARA LA BARRA DE NAVEGACION
    <>
        <NavBar/>

            <Routes>

                <Route path="marvel" element={ <MarvelPage/> }/>

                <Route path="dc" element={ <DcPage/> }/>
                
                <Route path="search" element={ <SearchPage/> }/>

            </Routes>
    
    </>
  )
}
