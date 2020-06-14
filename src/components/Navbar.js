import React, { Component } from 'react';
import {Link, Switch} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (

          <nav className ="navbar navbar-expand-lg navbar-light bg-light px-sm-5 shadow p-2 mb-5 rounded fixed-top"  >
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
                                    Products
                              </Button>
                             
                          </Link>
                      </li>                    
                  </ul>                
                  <ul className="navbar-nav align-items-center">
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

const ButtonContainer = styled.button`

  font-size: 1.4 rem;
  background: transparent;
  border: 0.05rem solid var(--mainDark);
  padding:0.5rem 0.7rem;
  border-radius: 0.36rem;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition:all 0.3s ease-in-out;
  &:hover {
    background: var(--mainGrey);
  }
  `;

  const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
