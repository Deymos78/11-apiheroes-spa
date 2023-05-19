import { useEffect, useState } from "react"
import { helperFetch } from "../heroes/helpers/helperFetch";


export const useFetch = () => {
    
    const [heroes, setheroes] = useState([{}]);
    const [isLoading, setisLoading] = useState(false)

    // Creamos una funcion que cuando se ejecute se hara la busqueda de los personajes
    const getHeroes = async() => {
        const heroes = await helperFetch();
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
