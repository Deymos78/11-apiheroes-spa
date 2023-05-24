
// Este sera el reducer, el cual le introduciremos al useReducer y cual manejara las acciones del reducer

import { types } from "../types/types"

// Todos los reducer reciben dos arguemntos, el estado y la accion a realizar
export const authReducer = (state ={}, action) => {

    switch(action.type){
        case types.login:
            return{
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return{
                logged: false
            }


        // Si no se realiza ninguna accion entonces devolveremos el estado sin modificarlo
        default:
            return state;

    }
}
