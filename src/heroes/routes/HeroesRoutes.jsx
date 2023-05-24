import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../userInterface/components/NavBar"
import {MarvelPage, DcPage, SearchPage, HeroPage} from '../pages'
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const HeroesRoutes = () => {

    const {user, logout} = useContext(AuthContext);

  return (
    // EN ESTE COMPONENTE SI SE MOSTRARA LA BARRA DE NAVEGACION
    <>
        <NavBar user={ user} logout={ logout }/>

          <div className="container">

            <Routes>

                <Route path="marvel" element={ <MarvelPage/> }/>

                <Route path="dc" element={ <DcPage/> }/>
                
                <Route path="search" element={ <SearchPage/> }/>

                {/* Definimos un parametro variable en la URL donde se asociara a una valor que se le pase por url */}
                <Route path="hero/:id" element={ <HeroPage/> }/>
                <Route path="/" element={ <Navigate to="/marvel"/> }/>

            </Routes>
          </div>
    
    </>
  )
}
