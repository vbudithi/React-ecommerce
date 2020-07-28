import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default class Default extends Component {
    render() {
        console.log(this.props);
          return (
             <div className = "container">
                    <br /> <br />   <br /> <br />
                 <div className="row">
                      <div className= "col-10 mx-auto text-center text-tile pt-5">
                           <i className="fa fa-wrench"></i>
                           <br />  <br />
                          <h1 className ="display-3">404</h1>  
                          <h1> error</h1>
                          <h2> Page Not Found </h2>
                        <br /> <br />
                          <h4>Oops!, looks like something went very wrong.</h4>
                          <Link to ="/" className="nav-link">
                                <Button primary>
                                   <i class="fa fa-angle-left">
                                     &ensp; GO TO PRODUCTS PAGE
                                    </i>
                                </Button>                   
                        </Link>      
                      </div>
                 </div>
             </div>
         );
     }
}