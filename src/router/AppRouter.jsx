import { Route, Routes } from "react-router-dom"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

// AppRoute es el nombre con el que se suele dar al primer router de la aplicacion
export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="/login" element={<LoginPage/>}/>

            <Route path="/*" element={<HeroesRoutes/>}/>

        </Routes>
    </>
        
    )
}
