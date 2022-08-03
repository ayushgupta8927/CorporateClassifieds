import React, { useState } from 'react';
// import "react-table-6/react-table.css";
import {  Col, Form, Row, FormGroup, Button } from 'reactstrap';
import Navbar from '../Components/Navbar/Navbar';


function ShowProductByLike() {
    const ProductsByLike = [];
    const offerId = React.createRef();
    // const details = React.createRef();
    // const offerId = React.createRef();
    // const offerId = React.createRef();
    
    // const employeeId = React.createRef();
    const [getResult, setGetResult] = useState(null);
    async function OnSubmit() {
        const OfferId = offerId.current.value;
        // const EmployeeId = employeeId.current.value;
        await fetch(`https://localhost:5001/api/Offer/GetOfferById/${offerId}`)
            .then(response => response.json())
            .then(
                (result) => {
                    ProductsByLike.push(result);
                    console.log(ProductsByLike)
                    // setGetResult([result]);


                },
                (error) => {
                    alert("Some Error Occured During Fetching");
                }
            )
    };
  return (
    
    <div>

    <div>
        <h4 align="center">Offer List</h4>
        <Form>
            <Col>
                <FormGroup row>
                    <label htmlFor="OfferId">Offer Id</label>
                    <Col sm={10}>
                        <input type="text" name="OfferId" ref={offerId} placeholder="offer ID" />

                    </Col>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup row>
                    <Col sm={5}>
                    </Col>
                    <Col sm={1}>
                        <button type="button" onClick={() => OnSubmit()} className="btn btn-success">Submit</button>
                    </Col>
                    <Col sm={1}>
                        <button type="button" className="btn btn-danger">Cancel</button>{' '}
                    </Col>
                    <Col sm={5}>
                    </Col>
                </FormGroup>
            </Col>
        </Form>
    </div>
    <div>                
            {   ProductsByLike &&
                    <div>
                        <h4 align="center">Business Property List</h4>
                        <table className="table table-striped" style={{ marginTop: 10, border: 2 }}>
                            <thead>
                                <tr>
                                    <th>Offer Id</th>
                                    <th>details</th>
                                    <th>Likes</th>
                                     <th>Category</th>
                                    <th>Status</th>
                                    <th>Opened Date</th>
                                    {/*<th>CostOfTheAsset</th>
                                    <th>SalvageValue</th>
                                    <th>UsefulLifeOfTheAsset</th>
                                    <th>PropertyValue</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {ProductsByLike.map(bp =>
                                    <tr key={bp.offerId}>
                                        <td>{bp.details}</td>
                                        <td>{bp.Likes}</td>
                                        <td>{bp.Status}</td>
                                        <td>{bp.Category}</td>
                                        <td>{bp.OpenedDate}</td>
                                         {/* <td>{bp.buildingAge}</td>
                                        <td>{bp.costOfTheAsset}</td>
                                        <td>{bp.salvageValue}</td>
                                        <td>{bp.usefulLifeOfTheAsset}</td>
                                        <td>{bp.propertyValue}</td> */}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
            } 
            </div> 
    </div >
  );
}

export default ShowProductByLike