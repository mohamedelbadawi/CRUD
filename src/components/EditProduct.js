import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct, updateProduct } from '../helpers';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditProduct = () => {
    let navigate = useNavigate();
    let { product } = useParams();
    const [price, setPrice] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        getProduct(product).then((data) => {
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);
        });
    }, [])

    const formSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            title,
            price,
            description
        }
        updateProduct(product, updatedProduct).then((data) => {
            navigate('/products')
            Swal.fire({
                icon: "success",
                title: "Product updated successfully",
            })
        }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Can't update product ",
            })
        })
    }
    return (<>
        <div>EditProduct</div>
        <div className='container m-5 border p-4 col-10'>

            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Product name</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="product-price" className="form-label">price</label>
                    <input type="number" className="form-control" value={price} step="0.01" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-description" className="form-label">Description</label>
                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" >update</button>
            </form>

        </div>
    </>
    )
}

export default EditProduct