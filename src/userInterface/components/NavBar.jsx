import { Link, NavLink } from 'react-router-dom';

// ESTA SERA LA BARRA DE NAVEGACION
export const NavBar = () => {
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
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel 
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC 
                    </NavLink>

                    <NavLink 
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }`} 
                        to="/search"
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
                        Andres
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        // onClick={}
                    >
                        Cerra Sesion
                    </button>
                </ul>
            </div>
        </nav>
  )
}


