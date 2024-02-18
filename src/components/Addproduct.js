import React, { useEffect, useState } from 'react'
import { addProduct } from '../helpers';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {
    let navigate = useNavigate();
    const [price, setPrice] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const formSubmit = (e) => {
        e.preventDefault();
        const product = {

            title,
            description,
            price
        }
        addProduct(product).then((data) => {

            setPrice('')
            setTitle('')
            setDescription('')

            navigate('/products')
            Swal.fire({
                icon: "success",
                title: "Product Added successfully",
            })
        })
    }

    return (

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

                <button type="submit" className="btn btn-success" >Add</button>
            </form>

        </div>
    )
}

export default AddProduct