import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './context/GlobalContext.jsx';
import CartProvider from './context/CartContext.jsx';
import UserProvider from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <GlobalProvider>
      <UserProvider>
      <CartProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter> 
      </CartProvider>
      </UserProvider>
      </GlobalProvider>

   
  </StrictMode>,
)
