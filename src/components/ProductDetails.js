import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../helpers';
const ProductDetails = () => {
    let { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct(productId)
            .then(json => setProduct(json))
    })
    return (
        <>
            <h1 className='m-5'>"{product.title}"</h1>
            <div className='d-flex justify-content-center'>

                <div class="card d-flex justify-content-center" style={{ width: '60rem' }}>

                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.description}</p>
                        <span className='bg-primary p-1 rounded text-white' style={{}}>{product.price}</span>

                    </div>
                </div >
            </div>
        </>

    )
}

export default ProductDetails