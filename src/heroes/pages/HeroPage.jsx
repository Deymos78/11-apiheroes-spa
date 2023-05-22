import { useParams } from "react-router-dom"
import { HeroList } from "../components/HeroList"
import { getHeroesById } from "../helpers/getHeroesById";


export const HeroPage = () => {

  // Empezaremos por recuperar el id del heroe del que estamos recuperando la id
  const { id } = useParams();
  console.log(id);
  console.log('Hola');

  const {heroes} = getHeroesById( id );


  return (
  
    <div className="row mt-5">

      <div className="col-4">
        <img 
          src={ heroes.img }
          alt={ heroes.name }
          className="img-thumbnail animate__animated animate__fadeInLeft" 
        />
      </div>

      <div className="col-8">
        <h3>{ heroes.name }</h3>

        <ul className="list-group list-group-flush">
          {/* <li className="list-group-item"> <b>Alter ego:</b> { heroes.alter_ego } </li> */}
          <li className="list-group-item"> <b>Publisher:</b> { heroes.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { heroes.first_appearance } </li>
        </ul>
        <h5 className="mt-3"> Characters</h5>
        {/* <p>{ heroes.characters }</p> */}

        <button 
            className="btn btn-outline-primary"
            // onClick={ onNavigateBack }
          >
            Regresar
          </button>
      </div>
    </div>
  
  )
}
