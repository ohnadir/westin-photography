import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Services from './Component/Services/Services';
import Signup from './Component/Signup/Signup';
import NotFound from './Component/NotFound/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import { createContext, useState } from 'react';

export const CartContext = createContext();
function App() {
  const [cart, setCart]=useState([])
  return (
    <div >
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/cart' element={
            <RequireAuth>
                <Cart></Cart>
            </RequireAuth>
            
          }></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </CartContext.Provider>
    </div>
  );
}

export default App;
