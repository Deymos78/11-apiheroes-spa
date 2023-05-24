import { useEffect, useState } from "react";

const HeroById = async(id) => {
    // console.log('Holisss');

    const url=`https://www.superheroapi.com/api.php/244145151627647/${ id }`;

    const resp = await fetch(url);

    const data = await resp.json();

    
    const heroeId = {
        id: data.id,
        name: data.name,
        img: data.image.url,
        first_appearance: data.biography['first-appearance'],
        publisher: data.biography.publisher,
        alignment: data.biography.alignment
    };

  return heroeId;
}

export const getHeroesById = ( id ) => {
    
    const [hero, sethero] = useState([]);

    // Creamos una funcion que cuando se ejecute se hara la busqueda de los personajes
    const getHeroesId = async() => {
        const heroes = await HeroById( id );
        // console.log('ESTO ES LO QUE NOS HA DEVUELTO');
        // console.log(heroes);
        
        sethero(heroes);
    }


    useEffect(() => {
      
        getHeroesId();
        
    }, [])
    
  
    return {
        hero
    }
}