import React, { Component } from 'react'
import {AiFillLike} from 'react-icons/ai'
import { variables } from '../Variables';

export default class Offers extends Component {
    constructor(props){
        super(props);
        this.state={offer:[]}
    }
    refreshList(){
        // fetch('https://localhost:5001/api/Offer/GetOfferById/5')
        fetch(variables.API_URL+'Offer/GetOffersList/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({offer:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }
    componentDidUpdate(){
        this.refreshList();

    }
  render() {
    const {offer}=this.state;

    return (
        <div>
{offer.map(ofs=>{
    return(
    <>
        <div className=' box col-lg-3 col-sm-6 col-md-3 mb-4'>
        

        <div class="card h-100 text-center p-4" key={ofs.offerId}>
          <img src={"img.png"} class="card-img-top" alt={ofs.Category} height="300px" />
          <div class="card-body">
              <h5 class="card-title mb-0">{ofs.details}</h5>
              <p class="card-text">{ofs.Status}</p>
              <i className="like"><AiFillLike/>{ofs.Likes}</i>
              <a  href="#" class="btn btn-primary">View Details</a>
          </div>
         </div>
      </div>
      </>)})}
      </div>
    )
    
  }
}
