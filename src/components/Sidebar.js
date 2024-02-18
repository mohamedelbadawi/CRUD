import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        < >
            <ul className='list-unstyled'>
                <li className='text-center'>
                    <Link to={'/products'} className='text-unstyled  ' > <strong> Products </strong> </Link>
                </li>


            </ul>
        </>
    )
}

export default Sidebar