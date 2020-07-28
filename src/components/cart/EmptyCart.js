import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Your cart is currently empty</h1>
                     <br />  <br />  <br />  
                     <i className= " fa fa-bolt"/>
                        <Link to ="/" className="nav-link">
                                <Button primary>
                                   <i class="fa fa-angle-left">
                                     &ensp; GO BACK TO PRODUCTS
                                    </i>
                                </Button>                   
                        </Link>
                </div>
               </div>  
            </div>
        )
    }
}
