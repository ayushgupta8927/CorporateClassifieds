import React from 'react';
// import  {GrFilter} from 'react-icons/gr';
// import {AiOutlineDown} from 'react-icons/ai';
// import filter from './Filter';
import "./Home.css";
import Menu from './Menu';
import Products from './Products';
function Home() {

  return (
    <div >
      {/* <filter/ */}
      {/* <div><div className='right'><a href='/'><span><GrFilter/><filter/></span>Filter 
<AiOutlineDown/></a></div></div> */}
{/* <div className='hero'>

      <div className="card text-bg-dark">
  <img src="/assets/bg1.jpg" className="card-img" alt="background" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-around">
    <h5 className="card-title display-3 fw-bolder mb-0">Buy and sell Goods across Organization
    </h5>
    <p className="card-text lead fs-2 display-2">'Buy and sell to the people around you </p>
  </div>
</div>
</div> */}
<Menu/>
<Products/>

</div>
  );
};

export default Home;