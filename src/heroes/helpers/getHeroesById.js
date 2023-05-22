import { useEffect, useState } from "react";


const HeroById = async(id) => {
    // console.log('Holisss')

    let url='https://superheroapi.com/api/access-token/';

    url = url+id;

    const resp = await fetch(url);

    const data = await resp.json();
    
    const heroeId = data.map(hero => ({
        id: hero.id,
        name: hero.name,
        img: hero.image.url,
        first_appearance: hero.biography.first_appearance,
        publisher: hero.biography.publisher,
        alignment: hero.biography.alignment
    }));

   
  return heroeId;
}


export const getHeroesById = ( id ) => {
    
    const [heroes, setheroes] = useState([{}]);
    const [isLoading, setisLoading] = useState(false)

    // Creamos una funcion que cuando se ejecute se hara la busqueda de los personajes
    const getHeroesId = async() => {
        const heroes = await HeroById( id );
        
        setheroes(heroes);
        setisLoading(true);
    }


    useEffect(() => {
      
        getHeroesId();
        
    }, [])
    
  
    return {
        heroes,
        isLoading
    }
}