import Button from 'react-bootstrap/Button';
import { useState } from "react"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ComLogin from "../components/Comlogin";

function Login(){

    return(
    <>
       <div className="app">
              <Navbar />
              <div className="contenido">
                <ComLogin/>
              </div>
                <Footer />
      </div>
        </>

    )

}

export default Login

