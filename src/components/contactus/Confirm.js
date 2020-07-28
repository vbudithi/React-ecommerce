import React, { Component } from 'react'

export default class FormUserDetails extends Component {
    continue = e => {
         e.preventDefault();
         this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values : {firstName, lastName, product, phone, email, feedback} } = this.props;
        return (
            <React.Fragment>
            <div>      
              <div class="container mx-auto form-group text-center">
               <br />
               <i className="fa fa-arrow-left" />  &emsp;&emsp;&emsp;
                <i className="fa fa-arrow-right" />
               <ul class="list-group mx-auto text-center">
               <br />
                <a
                href="#"
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "First Name"
                 secondaryText ={firstName}>
                   First Name: 
                   <br />
                   {firstName}
                </a>       
                <a 
                 href="#"
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Last Name"
                 secondaryText ={lastName}
                >
                    Second Name:
                    <br />
                    {lastName}
                </a>     
                <a 
                 href="#"
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Product"
                 secondaryText ={product}
                >
                    Product:   
                    <br />
                    {product}
                </a>
                <a
                 href="#"
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "email"
                 secondaryText ={email}
                >
                    Email:
                    <br />
                    {email}
                </a>
                <a
                 href="#"
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Phone"
                 secondaryText ={phone}
                >
                     Phone:
                     <br />
                     {phone}
                </a>
                <a
                 href="#"
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Feedback"
                 secondaryText ={feedback}
                >
                   Feedback:  
                    <br />
                   {feedback}
                </a>
               </ul>                
               <br />
               <br />
               <div className="col-md-6 mx-auto form-group text-center">   
               <button
                type="button" 
                class="btn btn-secondary"
                onClick={this.back}
                >Back
                </button>                 
                &emsp;
               <button
                  type="confirm" 
                  class="btn btn-primary"
                  onClick={this.continue}
                  >Confirm & Continue
                </button>
                </div>  
            </div>
         </div>
         </React.Fragment>
          
        )
    }
}

