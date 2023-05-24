import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";


// En el Private Router recibiremos los children
export const PrivateRoute = ({children}) => {
    console.log('AQUI ESTAN LOS CHILDREN DEL PRIVATE');
    console.log(children);

    // Recuperamos el valor almacenada por el AuthContext que haymos puesto seguna si estamos llogeados o no
    const {logged} = useContext(AuthContext);

    // Este hook nos lo da la biblioteca de react router dom y nos proporciona cosas como el pathanme y el search entre otros
    const {pathname, search} = useLocation();

    // Ahora montamos el ultimo lugar donde nos encontramos y lo que estmoas buscando en caso de que salgamos de la aplicacion
    // De esta manera cuando volvamos a iniciar sesion podremos saber donde estabamos y lo que estabamos buscando dentro de la aplicacion
    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

    // Aqui se realiza una comprobacion de si esta autenticado o no, en caso de que este autenticado mostrara el children
    // En el caso de que no este autenticado lo que se hara es reenviar al usuario a la pantalla de login
  return ( logged )
  ? children
  : <Navigate to="/login"/>
}
