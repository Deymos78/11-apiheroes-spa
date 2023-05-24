import { useEffect, useState } from "react"
import { HeroByName } from "./HeroByNameHelper";


export const getHeroesByName = ( name='' ) => {


    const [heroes, setheroes] = useState([])
    const [isLoading, setisLoading] = useState(false);
    

    // Creamos una funcion que cuando se ejecute se hara la busqueda de los personajes
    const getHeroesName = async() => {

        // Colocamos el cambio de estado dentro de la funcion, ya que sino el useState no se inicializara
        // Y React necesita que se los hooks se ejecuten como en la anterior ejecucion, tienen que hacerlo en el mismo orden
        // name = name.toLocaleLowerCase().trim();
        if(name.length === 0){
            setheroes([]);
            return [];
        } 
        const datos = await HeroByName( name );
        setheroes(datos);
        if(datos.length === 0){
            setheroes([]);
            return []
        }
        setisLoading(true);
        
        
    }


    useEffect(() => {
      
        getHeroesName();
        
    }, [ name ])
    
  
    return {heroes, isLoading}
}
