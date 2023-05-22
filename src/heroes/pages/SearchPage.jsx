import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { getHeroesById } from "../helpers/getHeroesById";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";


export const SearchPage = () => {

  // El useNavigate nos permite cambiar la ruta URL a otra url sin la necesidad de un enlace o redireccion explicita
  const navigate = useNavigate();

  // Una vez que hayamos cambiado el valor de la URL ahora tendremos que poder recoger esa queryString, asi que usaremos el useLocation
  // Nos ayudara para saber en donde nos encontramos y para poder recoger datos como la queryString
  const location  = useLocation();


  // Ahora recogeremos el valor que se encuentra almacenado en la URL 
  // Le colocamos una valor vacio para que no sea undefined
  const { q='' } = queryString.parse(location.search);

  // Aqui se realiza las peticiones hacia la API y se le pasa como argumento el nombre que se haya colocado en el input
  console.log('Esta es la cadena recupeara '+ q.length);
  console.log(typeof q)

  const {heroes, isLoading}  = getHeroesByName( q );
  console.log(typeof heroes);
  console.log(heroes);

  // console.log('Hemos vuelto y la longitu del objeto es' + heroes.length);
  
  // ShowSearch es una constante que nos ayudara a mostrar por pantalla el estado de la peticion hacia la API
  // En este caso comprobamos que hay texto en el input 
  const showSearch = ( q.length === 0);
  
  // En el caso de que haya datos dentro del input y no se haya devuelto resultados significara que no hay heroes con eso nombres
  const showError =(q.length >0) && heroes.length ===0;
    
  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();

    // Aqui usaremos el useNavigate, pero en lugar de viajar a otra ruta lo que haremos es cambiar la url introduciendole una clave-valor
    // que es lo que nos permitira realizar la busqueda para poder realizar la busuqeda de los heroes

    navigate(`?q=${searchText}`);

  }

  return (
    <>
    
    <h1>Search</h1>
      <hr />
    
    
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off" 
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
            ? <div className="alert alert-primary">Search a hero</div>
            : ( heroes.length === 0 ) && <div className="alert alert-danger">No hero with <b>{ q }</b> </div>
          }
           */}

          <div className="alert alert-primary animate__animated animate__fadeIn" 
          // Aqui mostraremos en caso de que nos devuelva true y esconderemos en funcion de los datos devueltos
          style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" 
          style={{ display: showError ? '' : 'none' }}>No hero with <b>{ q }</b> </div>

          {

           
            (isLoading)
            ?
            heroes.map(hero => (

              <HeroCard  
                key={hero.id}
                {...hero}  
              />
            ))
            :
            <h2>Nada</h2>
            
            
             
          }

        </div>

      </div>
      

    </>
  )
}
