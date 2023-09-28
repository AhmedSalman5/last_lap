import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axiosInstance from '../../Axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Search from '../../components/Search/Search';
import ProductList from '../../components/ProductList/ProductList';



function Home() {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        getProductsList();
    }, []);

    const getProductsList = () =>{
        axiosInstance.get('/products')
            .then(res => {
                setProductsList(res.data.products)
                console.log(res.data.products)
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <Search setProductsList = {setProductsList} getProductsList = {getProductsList}/>
            <ProductList productsList = {productsList}/>
        </>
    )
}

export default Home;