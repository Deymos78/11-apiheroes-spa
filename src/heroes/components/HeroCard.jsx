import { Link } from "react-router-dom"


export const HeroCard = ({
    id,
    name,
    img,
    first_appearance,
    publisher,
    alignment

}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4"> 
                    <img src={ img } className="card-img" alt={ name } />
                </div>

                <div className="col-8">

                    <div className="card-body">

                        <h5 className="card-title"> { name }</h5>
                        <p className="card-text">{ alignment }</p>
                        <p className="card-text">{ publisher }</p>
                        

                        {/* Vamos a mostrar los characters solo si no es igual al alter ego de esta forma no parecera una repeticion */}
                        {/* {
                            ( alter_ego !== characters ) && (charactersByHero)
                            ( alter_ego !== characters ) && (<p>{ characters }</p>)
                        } */}

                        {/* <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>   */}

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        {/* En este link se montara una url donde se le pasara el id del persona que despues la recogeremos */}
                        <Link to={`/hero/${ id }`}>
                            Mas...
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
