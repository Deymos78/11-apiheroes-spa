import { useState } from "react";
import { useFetch } from "../../hooks/useFetch"
import { HeroCard } from "./HeroCard"

// AQUI NOS ENCARGAREMOS DE MONTAR LOS HEROES QUE ENCONTRREMOS
export const HeroList = ({heroes, isLoading}) => {

    

    const [datos, setdatos] = useState([{}]);
    const [condicional, setcondicional] = useState(true);


        
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
