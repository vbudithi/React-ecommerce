import React, {Component} from 'react'

export default class CartItem extends Component {
   render(){
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
       <div className="row my-4 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2">
               <img
                src = {img} 
                style= {{width:"7rem", height:"7rem"}} 
                className="rounded-circle" 
                alt= "product" 
                data-holder-rendered="true"
               />
           </div>
    
           <div className= "col-10 mx-auto col-lg-2 titlestyle">
              <span className="d-lg-none">Product: </span> 
              <br />
              {title}
              <hr />
           </div> 
           <div className="col-10 mx-auto col-lg-2">
              <span className="d-lg-none">Price: </span> 
              <br />
              ${price}
           </div>
           <div classname="col-10 mx-auto col-lg-2 my-2 my-lg-0">
               <div className="d-flex justify-content-center">
                   <div>
                       <br />
                    <span className="btn btn-black mx-1" onClick={() => decrement(id)} > 
                    -
                    </span>
                    <span className="btn btn-black mx-1"> 
                    {count}
                    </span>
                    <span className="btn btn-black mx-1" onClick={() => increment(id)} > 
                    +
                    </span>
                </div>
              </div>
           </div>
           <div className="col-10 mx-auto col-lg-2">
           <br />
          
               <div className="cart-icon" onClick={() =>removeItem(id)}>
                   <i class = "fa fa-trash" />                
                </div>         
           </div>
           <div className="col-10 mx-auto col-lg-2">
            <br />
              <strong> ${total} (ITEM TOTAL)</strong> 
            </div> 
       </div>

    );

   }
}
