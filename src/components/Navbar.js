import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { ButtonContainer , Button } from './Button';

export default class Navbar extends Component {
    render() {
        return (
          <nav className ="navbar navbar-expand-lg bg-light px-sm-5 shadow p-1 mb-6">
               { /* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    <Link to ='/'>
                       <img src={logo} alt ="store" className="navbar-brand" />
                    </Link>
                  <ul className="navbar-nav align-items-center">
                      <li className="nav-item ml-5">
                          <Link to ="/" className="nav-link">
                              <Button primary>
                                   <i className="fa fa-product" />
                                   PRODUCTS
                              </Button>                   
                          </Link>
                      </li>       
                      <li className="nav-item ml-5">
                          <Link to ="/about" className="nav-link">
                              <Button>                            
                                  ABOUT
                              </Button>
                          </Link>
                      </li>        
                      <li className="nav-item ml-5">
                          <Link to ="/contact" className="nav-link">
                              <Button>                            
                                  CONTACT
                              </Button>
                          </Link>
                      </li>        

                  </ul>
                  <Link to ='/cart' className="ml-auto">
                    <ButtonContainer>
                      <span className = "mr-2">
                          <i className="fas fa-shopping-cart"/>
                      </span>                      
                        Cart
                    </ButtonContainer>
                  </Link>
          </nav>
        );
    }
}

