import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"

// AppRoute es el nombre con el que se suele dar al primer router de la aplicacion
export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage/>
                </PublicRoute>
            }/>

            <Route path="/*" element={
                <PrivateRoute>
                    <HeroesRoutes/>
                </PrivateRoute>
            }/>

        </Routes>
    </>
        
    )
}
