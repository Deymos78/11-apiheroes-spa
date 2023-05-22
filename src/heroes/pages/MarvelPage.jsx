import { useFetch } from "../../hooks/useFetch";
import { HeroList } from "../components/HeroList"

// Esta es la Pagina donde se mostrara la lista de heroes de marvel
export const  MarvelPage = () => {

  

  return (
    <>
    <h1>Marvel Heroes Page</h1>
    {/* Aqui declararemos el componente que nos devolvera la lista de los heroes de marvel */}
        <HeroList publisher={ 'Marvel Comics' }/>
    </>
  )
}
