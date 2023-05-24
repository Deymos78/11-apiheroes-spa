
import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

import { types } from "../types/types";

const initialState = {
    logged: false
}

// Esta sera nuestra funcion de inicializacion
const init = () => {
    // Crearemos una constante la cual almacenaremos  el valor del localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    return{
        // En el caso de que no haya usuario nuestro resultado de doble negacion sera false en caso de que haya sera true,
        // de esta manera sabremos si estamos loggeados o no
        logged: !!user,
        // El usuario es el usuario que tengamos como valor
        user: user
    }

}



// Este es un componente funcional como cualquier otro la diferencia es que recibira los children como props
// El AuthProvider usa el AuthContext con el objetivo de que sea el componente que provea la informacion a toda la aplicacion
export const AuthProvider = ({ children }) => {

    // Crearemos un useReducer el cual se encargara de manejar el estado del loggeo del usuario
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    // CREAREMOS LAS DOS FUNCIONES LAS CUALES MANEJARAN EL ESTADO DEL LOGEO

    // La primera funcion manejara el login de la aplicacion
    const login = (name = '') => {
        const user = { id: 'ABC', name}

        // Creamos la  accion que se la pasaremos al dispatch
        const action = {
            // Crearemos el tipo de accions que se realizara
            type: types.login,
            // Ahora le pasaremos el valor con el que trabajara
            payload: user
        }

        // Ahora almacenaremos en el local storage el usuario que hemos creaddo para que este guardado para su utilizacion cuando 
        // cualquier componente lo necesite para realizar cualquier accion
        // Antes de guardarlo lo pasamos a cadena de texto ya que localStorage solo guarda texto y no objetos
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);

    }

    // Ahora montaremos la funcion que deslogeara al usuario
    const logout = () => {

        // Ahora tendremos que quitar la informacion almacenada en el localStorage ya que la accion ahora sera el deslogueo del usuario
        localStorage.removeItem('user');

        const action = {
            type: types.logout,
        }
        dispatch(action);

    }

  return (
    // Usando el componente que usamos para crear el AuthContext, le pasamos el valor que se va a compartir entre todos los children
    <AuthContext.Provider value={{
        ...authState,
        login: login,
        logout: logout
    }}
    >
        {children}
    </AuthContext.Provider>
    
  )
}
