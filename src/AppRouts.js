import React from 'react';
import  {BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Favourites from './Pages/Favourites/Favourites';
import FavouritePage from './Pages/Favourites/Favourites';


function AppRouts() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home/>} />
                <Route path='/product-details/:id' element ={<ProductDetails/>} />
                <Route path='/favourites' element ={Favourites}/>
                <Route path="/products-favourite" element={<FavouritePage />} />
                <Route path='*' element ={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouts;
