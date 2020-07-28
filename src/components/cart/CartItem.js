import React, {Component} from 'react'

export default class CartItem extends Component {
   render(){
    const { id, title, img, price, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
   <div clssName="container">
      <div className="card-product">      
       <div className="row my-4 text-capitalize text-center ">
           <div className="col-10 mx-auto col-lg-2">   
           <br />
               <img
                src = {img} 
                style= {{width:"7rem", height:"7rem"}} 
                className="rounded-circle" 
                alt= "product" 
                data-holder-rendered="true"
               />
           </div>
          <br />
          <br />
           <div className= "col-10 mx-auto col-lg-2 titlestyle">     
           <p className="text-uppercase font-weight-bold">  
              Product
            </p>
              {title}
            < hr />
            <h4>
            <i class="fas fa-dollar-sign" />
            <strong>
               {price}
            </strong>
            </h4>   
           </div> 
            <div classname="col-10 mx-auto col-lg-2 my-2 my-lg-0">
             <br />
             <br />    
               <div className="d-flex justify-content-center">       
                    <button type="button" className="btn btn-pill" onClick={() => decrement(id)} > 
                    <i className="fa fa-minus" aria-hidden="true" />
                    </button>
                    <span className="btn btn-pill"> 
                    {count}
                    </span>
                    <button type="button" className="btn btn-pill" onClick={() => increment(id)} > 
                    <i className="fa fa-plus" aria-hidden="true" />
                    </button>        
               </div>
            </div>
           <div className="col-10 mx-auto col-lg-2">  
           <br />
           <br /> 
               <span className="btn btn-pill" onClick={() =>removeItem(id)}>
                   <i class = "fa fa-trash" />                
                </span>
           </div>
           <div className="col-10 mx-auto col-lg-2">    
           <br />
           <br /> 
            <h4>
              <i class="fas fa-dollar-sign" />
              <strong>
              {total}
              </strong>
              
           </h4> (ITEM TOTAL)
            </div> 
       </div>
        </div>
        <br />
      </div>
      

    );

   }
}
