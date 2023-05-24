import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

// ESTA SERA LA BARRA DE NAVEGACION
export const NavBar = () => {

    // Para desloguear correctamente al usuario recuperamos los datos del context para poder usarlas aqui

    const {user, logout} = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        });
    }
    
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <img
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" 
                width="150"
                height="30"
            />
          
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
                        to="/marvel" exact 
                    >
                        Marvel 
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
                        to="/dc" exact 
                    >
                        DC 
                    </NavLink>

                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 

                        to="/search" exact 
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end" >
                <ul className="navbar-nav ml-auto">
                    <span
                    className='nav-item nav-link text-primary'
                    >
                        { user?.name }
                        {/* Andres */}
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
  )
}


