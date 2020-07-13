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
              <div class="container">
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
                 <ul class="list-group">
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
               <button
                  type="confirm" 
                  class="btn btn-primary"
                  onClick={this.continue}
                  >Confirm & Continue
                </button>
                
                &emsp;
                <button
                type="button" 
                class="btn btn-secondary"
                onClick={this.back}
                >Back
                </button>      
                <br />       
            </div>
         </div>
         </React.Fragment>
          
        )
    }
}

