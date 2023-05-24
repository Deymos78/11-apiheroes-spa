import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

// ESTA SERA EL COMPONENTE DONDE SE TENDRA TODO EL ENRUTAMIENTO
export const APIHeroesApp = () => {

  return (  
    // Esta es la parte mas alta de la aplicacion asi que este sera un buen lugar para colocar le Contexto, para que de esta manera 
    // Todos lo componentes puedan acceder a los datos del Contexto sin tener que heredarlso de componente de mayor nivel
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
    
  )
}

