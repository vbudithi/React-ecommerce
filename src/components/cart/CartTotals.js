import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
        const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

        return (
               <React.Fragment>
                   <div className="container">
                       <div className="row">
                           <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">     
                                 <h4>
                                     <span className="text-title">
                                         subtotal:
                                         </span> {""}
                                         <i class="fas fa-dollar-sign" />
                                           <strong>
                                              {cartSubTotal}   
                                            </strong>                    
                                 </h4>
                                 <h4>
                                     <span className="text-title">
                                         Tax:
                                     </span> {""}
                                     <i class="fas fa-dollar-sign" />
                                     <strong>
                                          {cartTax}
                                    </strong>
                                 </h4>
                                 <h4>
                                     <span className="text-title">
                                            total:
                                     </span> {""}
                                         <i class="fas fa-dollar-sign" />
                                             <strong>
                                               {cartTotal}
                                             </strong>    
                                 </h4>
                                 <PayPalButton
                                    total={cartTotal} 
                                    clearCart= {clearCart} 
                                    history ={history} 
                                 />
                            </div>
                            <br />
                            <div className="btn-outline col-10 mt-2 ml-sm-5 ml-md-auto col-sm-6 text-capitalize text-center">     
                                <Link to ="/" className="nav-link">
                                     <Button primary>
                                        <i class="fa fa-angle-double-left">
                                            <br />
                                              VIEW MORE PRODUCTS
                                        </i>
                                    </Button>                   
                                 </Link>
                                 <br />
                                 <br />
                                 <Link to ="/">
                                     <button
                                      className="btn btn-outline-primary text-uppercase mb-3 px-5" 
                                      type="button"
                                      onClick={() => {
                                           clearCart();
                                      }}
                                     > 
                                     <i className="fa fa-window-close" aria-hidden="true" />
                                     <br />
                                       clear all
                                     </button>
                                 </Link>
                             </div>                                
                           </div>
                       </div>
            </React.Fragment>
        );
    
}
