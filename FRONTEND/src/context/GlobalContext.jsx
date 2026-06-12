import { createContext } from "react";
import { useState } from "react";

// Crear el contexto global
export const GlobalContext = createContext();

// crear el proveedor del contexto

const GlobalProvider = ({ children }) => {

const [user, setUser] = useState(null);


    return(
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    )
}

// todo lo que envolvamos en GlobalProvider sera lo que estara dentro de children, es decir, toda la aplicacion.
// cualueir cosa que queremos compartir se utiliza el value del provider, por ejemplo, el precio y el logeado que se encuentran en el Navbar, si queremos compartirlos, los colocamos en el value del provider y luego los consumimos en el Navbar.

export default GlobalProvider;

//vamos a expertar el contexto y el proveedor para poder utilizarlos en el Navbar, y asi poder compartir el estado de logeado y precio entre el Navbar y cualquier otro componente que necesite acceder a esa informacion.