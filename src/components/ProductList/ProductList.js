import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';





const ProductList = ({ productsList }) => {

    const dispatch = useDispatch();

    const handleAddToFavourites = (e,product) =>{
        dispatch({type:'ADD_TO_FAVOURITES',payload:product})
    }
    return productsList.length ? (
        productsList.map((product, index) => (
            <div key={product.id} className='product-card'>
                <button onClick={(e)=>handleAddToFavourites(e,product)}>Favourites</button>

                <Link to={`/product-details/${product.id}`}>
                    <div className="container mt-4">
                        <h6 className='h6'>{product.title}</h6>
                        <div className="card">

                            <img src={product.images[0]} className="card-img-top product-image" alt='img' />
                            <div className="card-body">

                                <h5 className="card-title">{product.brand}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">price: {product.price}$</h6>

                                <p className="card-text product-description">{product.description}</p>
                            </div>
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                    </div>
                </Link>
            </div>
        ))
    ) : (
        <div className="loader"></div>
    )
    };

export default ProductList;






