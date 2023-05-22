import { useState } from "react";
import { useFetch } from "../../hooks/useFetch"
import { HeroCard } from "./HeroCard"
import { getHeroByPublisher } from "../helpers/getHeroesByPublisher";

// AQUI NOS ENCARGAREMOS DE MONTAR LOS HEROES QUE ENCONTRREMOS
export const HeroList = ({publisher}) => {


    const { heroes, isLoading } =  useFetch(publisher);
    console.log('Entramos a HeroList');

        
  return (
    <>
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            (isLoading)
            ?
            (heroes.map(hero =>(
                <HeroCard 
                    key={hero.id}
                    {...hero}
                />
            )))
            :
            (<h3>Cargando....</h3>)
        }
    </div>
        {/* <span>{JSON.stringify(heroes)}</span> */}
    </>
    

  )
}
