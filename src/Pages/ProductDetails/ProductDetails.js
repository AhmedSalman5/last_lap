import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDetails.css';



function ProductDetails() {
    const { id } = useParams();

    const [ProductDetails, setProductDetails] = useState(undefined);

    useEffect(() => { getProductDetails() },);

    const getProductDetails = () => {
        axiosInstance.get(`/products/${id}`)
            .then((res) => { setProductDetails(res.data); console.log(res.data) }).catch(err => console.error(err))
    }
    return (
        <>
            {ProductDetails ? (
                <>
                    <div className='cover'>
                        <div className='title'>
                        <h5>{ProductDetails.title}</h5>
                        </div>
                        <div >
                            <div className='img1'><img src={ProductDetails.images[0]} alt="img" /></div>
                            <div className='images'>
                                <img src={ProductDetails.images[1]} alt="img" />
                                <img src={ProductDetails.images[2]} alt="img" />
                                <img src={ProductDetails.images[3]} alt="img" />
                            </div>
                            <div className='text'>
                            <h6>Price : {ProductDetails.price}$</h6>
                            </div >
                            <div className='text'>
                            <h6>Brand : {ProductDetails.brand}</h6>
                            </div>
                            <div className='text'>
                            <h6>{ProductDetails.description}</h6>
                            </div>
                        </div>
                    </div>
                </>
            ) : <p> Loading...</p>}
        </>
    )
}

export default ProductDetails;