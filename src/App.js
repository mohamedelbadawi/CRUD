import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './components/Addproduct';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home />} />


            <Route path='products' element={<><Outlet /> </>} >
              <Route path="" element={<Products />} />
              <Route path='add' element={<AddProduct />} />
              <Route path=':productId' element={<ProductDetails />} />
              <Route path='update/:product' element={<EditProduct />} />
            </Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
