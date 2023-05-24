import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  // En esta pagina recuperaremos el contexto que habremos creado anterioremente
  const { login } = useContext( AuthContext);

  const navigate =  useNavigate();

  const onLogin = () =>{

    // En esta variable conseguimos el ultimo lugar y en caso de no encontrarlo lo enviaremos al login
    const lastPath = localStorage.getItem('lastPath') || '/';
    
    // Usaremos la funcion que recuperamos del UseContext para enviarle el nombre que se mostrara 
    login("Andres CH");

    // ahora navegamos al ultimo lugar en el que estabamos y en evitamos poder volver en 1 en el historial de navegacion
    navigate(lastPath, {  
      replace:true
    });

  }

  return (
    // EN ESTA PAGINA NO SE MOSTRARA LA BARRA DE NAVEGACION
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
