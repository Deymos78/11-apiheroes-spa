import { useEffect, useState } from "react"
import { helperFetch } from "../heroes/helpers/helperFetch";
import { getHeroByPublisher } from "../heroes/helpers/getHeroesByPublisher";


export const useFetch = ( publisher ) => {
    
    const [heroes, setheroes] = useState([{}]);
    const [isLoading, setisLoading] = useState(false)

    // Creamos una funcion que cuando se ejecute se hara la busqueda de los personajes
    const getHeroes = async() => {
        const heroes = await getHeroByPublisher( publisher );
        setheroes(heroes);
        setisLoading(true);
    }


    useEffect(() => {
      
        getHeroes();
        
    }, [])
    
  
    return {
        heroes,
        isLoading
    }
}
