import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './components/NavBar/Navbar'
import ListaServicios from './components/ListaServicios/ListaServicios';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/pages/Cart';
import ErrorPage from './components/pages/ErrorPage';


export default function App() {
    return (
      <BrowserRouter>
        <NavBarr/>
        <Routes>
          <Route path='/' element={<ListaServicios/>}/>
          <Route path='/:categoriaId' element={<ListaServicios/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
  }