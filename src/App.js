import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
// import Add from './pages/Add';
import Add from './pages/Add';
import Login from './Components/Login/Login';
import Offers from './pages/Offers';
import AddProduct from './pages/AddProduct';
import ShowProductByLike from './pages/ShowProductByLike';


function App() {
  return (
    <>
    <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/products' element={<Offers/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Addproduct' element={<AddProduct/>}/>
          <Route path='/ShowProductByLike' element={<ShowProductByLike/>}/>
        </Routes>
      </Router>
      </>
  );
}

export default App;
