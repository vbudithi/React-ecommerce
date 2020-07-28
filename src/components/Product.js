import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import Aos from "aos";
import "aos/dist/aos.css";

export default class Product extends Component {
    render() {
        const{ id, title, img, price, inCart} =this.props.product;
        Aos.init({duration:1000});   
        return (  
            <ProductWrapper className ="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div data-aos="fade-right" data-aos-once="true" className="card">
                   <ProductConsumer>   
                       {value => ( 
                       <div className="img-container p-5"
                        onClick = {() =>
                              value.handleDetail(id)
                        }
                        >
                        <Link to ='/details'>
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button
                            className ="cart-btn"
                            disabled = {inCart ? true :false}
                            onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                            }}
                            >
                            {inCart ? (
                                    <p className="text-capitalize mb-0" disabled>{""}
                                        in Cart
                                    </p>
                                    ) : (
                                    <i className="fas fa-cart-plus"/>
                                    )}
                            </button>
                        </div>)}                              
                        </ProductConsumer>        
                        {/*Card Footer*/}
                            <div className="card-footer d-flex justify-content-between">
                                <p className="align-self-center mb-0">
                                    {title}
                                </p>
                                <h5 className="text-black font-italic mb-0">                        
                                <i class="fas fa-dollar-sign" /> 
                                <strong>
                                 {price}     
                                </strong>
                                </h5>
                            </div>
                    </div>  
                    </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper =  styled.div `

.card{ 
    transition: all 1s linear;
    transform: translateY(translateY);
}

.cardfooter {
    background:transparent;
    border-top:transparent;
    transition: all 1s linear;   
}
&:hover{
    .card{
         border: 0.04rem solid(0,0,0,0.2);
         box-shadow:2px 12px 18px -6px rgba(0,0,0,0.3);
    }
    .card-footer{
         background:rgba(238,238,238);
    }
}

.card-img-top{
    transition: all 0.5s linear;
}

.img-container{
    position:relative;
    overflow:hidden;
}
.img-container:hover .card-img-top{
    transform : scale(1.4);
}

.cart-btn{
    position: absolute;
    bottom:0;
    left:0;
    padding:0.2rem 0.5rem;
    background: var(--mainGrey);
    border:none;
    font-size:1.2rem;
    border-radius:0 0 0 0;
    transition: all 0.5s linear;   
}

.img-container:hover .cart-btn{
    transform: translate(0, 0);   
}

.cart-btn:hover {
    color: var(--mainWhite);
    cursor:pointer;
    background: var(--mainBlue);
}
`;