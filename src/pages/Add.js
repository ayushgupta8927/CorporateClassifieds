import React from 'react';
import {AiFillLike} from 'react-icons/ai';
import Tilt from 'react-parallax-tilt';
import {ImPlus} from 'react-icons/im'
import AddProduct from './AddProduct';
function Add() {
  return (
    <div>
        <h3 class=" m-5 mb-6">Add Offers</h3>
        <div className=' box col-lg-3 col-sm-6 col-md-4 '>
          <div class="card h-100 text-center px-4" key="{id}">
            <Tilt scale={1.2}>
            <img  src="headphones.png" class="card-img-top" alt="{product.title}" height="200px" /></Tilt>
            <div class="card-body">
                <h5 class="card-title mb-0">Product Name</h5>
                <p class="card-text">INR 1000</p>
                <i className="like"><AiFillLike/>5</i> 
                <a  href="#" class="btn btn-primary">View Details</a>
            </div>
           </div>
        </div>
        {/* comment out the below part later */}
        <div className=' box col-lg-3 col-sm-6 col-md-4 '>
          <div class="card h-100 text-center px-4" key="{id}">
            <Tilt scale={1.2}>
            <img  src="laptop.png" class="card-img-top" alt="{product.title}" height="200px" /></Tilt>
            <div class="card-body">
                <h5 class="card-title mb-0">Product Name</h5>
                <p class="card-text">INR 1000</p>
                <i className="like"><AiFillLike/>5</i> 
                <a  href="#" class="btn btn-primary">View Details</a>
            </div>
           </div>
        </div>
        <div className=' box col-lg-2 col-sm-6 col-md-4 m-5'>
        <div class="card h-500 text-center p-5 " >
            <button onClick={<AddProduct/>} className="btn btn-light"><ImPlus/></button>
        </div>
        </div>
    </div>
  )
}

export default Add;