import { useState } from "react";
import Button from 'react-bootstrap/Button';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formregister from "../components/Formregister";

function Register(){




return(
    <>
       <div className="app">
              <Navbar />
            
              <div className="contenido">
                <Formregister />
              </div>
                <Footer />
       </div>
     
   
   
        </>
)

}

export default Register;