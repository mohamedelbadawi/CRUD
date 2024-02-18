import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteRequest, fetchProducts } from '../helpers';
import Swal from 'sweetalert2'
import { Outlet } from 'react-router-dom'
const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const getAllProducts = () => {
        fetchProducts().then(
            json => {
                setProducts(json)
                setFilteredProducts(json);
            }
        );
    }
    const deleteProduct = (product) => {
        console.log(product);

        Swal.fire({
            icon: "error",
            title: `Are you sure you want to delete ${product.title}?`,
            showCancelButton: true,
        }).then((data) => {

            if (data.isConfirmed) {

                deleteRequest(product.id).then(() => getAllProducts())
            }
        }
        )
    }


    useEffect(() => {
        getAllProducts();
    }, [])

    useEffect(() => {
        const data = products.filter(item => item.title.toLowerCase().includes(searchData.toLowerCase()))
        setFilteredProducts(data)
    }, [searchData, products])




    return (<>
        <div className='d-flex justify-content-between m-3'>
            <h1>Products</h1>
            <Link to={'/products/add'} className='btn btn-success mt-3' >Add new Product</Link>
        </div>
        <table className="table table-striped">
            <thead>
                <input placeholder='Search' className='rounded m-2 border-none border-1 p-2' value={searchData} onChange={(e) => {
                    setSearchData(e.target.value)

                }} />
                <tr>

                    <th className='col-2'>ID</th>
                    <th className='col-2'>Name</th>
                    <th className='col-2'>description</th>
                    <th className='col-2'>price</th>
                    <th className='col-2'>Actions</th>

                </tr>
            </thead>
            <tbody>

                {filteredProducts.map((product) => {

                    return <tr className='col-12' key={product.id}>

                        <td className='col-1'>{product.id}</td>
                        <td className='col-2  product-title'>{product.title}</td>
                        <td className='col-1 '>{product.description}</td>
                        <td className='col-2'>{product.price}</td>

                        <td className='col-6 '>
                            <Link to={`/products/${product.id}`} className='me-2 btn btn-info btn-sm ' >view</Link>
                            <Link to={`/products/update/${product.id}`} className='me-2 btn btn-primary btn-sm'  >edit</Link>
                            <button className='me-2 btn btn-danger btn-sm' onClick={() => deleteProduct(product)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        <Outlet />

    </>
    )
}

export default Products