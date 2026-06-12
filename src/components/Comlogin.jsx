import Button from 'react-bootstrap/Button';
import { useState } from "react"
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';
import { UserContext } from '../context/UserContext.jsx';

import { useNavigate } from 'react-router-dom';


function comLogin(){

const [email, setEmail] = useState("")

const cambiandoelEmail = function(evento){
    setEmail(evento)
}

const [password, setPassword] = useState("")

//USAMOS EL CONTEXTO PARA PODER COMPARTIR EL ESTADO DE LOGEADO ENTRE EL NAVBAR Y EL LOGIN, ASI CUANDO INICIEMOS SESION EN EL LOGIN, SE ACTUALICE EL ESTADO DE LOGEADO EN EL NAVBAR Y SE MUESTRE EL BOTON DE LOGOUT Y PROFILE, Y CUANDO CERRAMOS SESION, SE ACTUALICE EL ESTADO DE LOGEADO EN EL NAVBAR Y SE MUESTRE EL BOTON DE LOGIN Y REGISTER.

const { user, setUser } = useContext(GlobalContext);
const {login, setLogin} = useContext(UserContext);

//HOOK PARA NAVEGAR ENTRE COMPONENTES, CUANDO INICIEMOS SESION, NOS LLEVE AL HOME, Y CUANDO CERRAMOS SESION, NOS LLEVE AL LOGIN. PARA ESO IMPORTAMOS EL HOOK USE NAVIGATE DE REACT ROUTER DOM Y LO USAMOS DENTRO DE LA FUNCION HANDSUBMIT Y EN EL BOTON DE LOGOUT.

const navigate = useNavigate()

//FUNSION PARA EL FORMULARIO CUANDO PRESIONEMOS EL BOTON

const handSubmit = (e)=>{
    
    e.preventDefault()
   
    let userlogged = {
        email: email,
        password: password,
        
    }

    if(password == "" || email == ""){
        alert("Debes completar todos los campos")
        return
    }

    if(password.length < 6){

        alert("La contraseña tiene que tener al menos 6 caracteres")
        return
    }

    setUser(userlogged) //guadamos los datos en el objeto de usser, y como el estado de user es global, se actualiza en toda la aplicacion, por lo que en el Navbar, al ser un componente hijo del provider, se actualiza el estado de logeado y se muestra el boton de logout y profile.
    
    alert("Sesión iniciada correctamente")
    setLogin(true) //actualizamos el estado de logeado a true para que se muestre el boton de logout y profile en el Navbar.
    setEmail("")
    setPassword("")

    navigate("/")
    } 


    return(
        <>
            <section className="login-section">
                 <form action="" className="Login" onSubmit={(e)=>{handSubmit(e)}} >
                <h2>Login</h2>
                <label htmlFor="Email">Email</label>
                <br />
                <input type="Email" placeholder="ejemplo@ejemplo.com" value={email} onChange={(evento)=>{cambiandoelEmail(evento.target.value)}} />
                <br />
                <label htmlFor="Contraseña">Password</label>
                <br />
                <input type="password" placeholder="**********" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br />
                <Button variant="dark" type="submit">Iniciar Sesión</Button>
            </form>
            </section>
           
        </>
    )

}

export default comLogin