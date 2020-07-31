import React, { Component } from 'react'
import Aos from "aos";

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
        Aos.init({duration:1000}); 
        return (
            <React.Fragment>
            <div>      
              <div class="container mx-auto form-group text-center">
               <br />
                <div data-aos="fade-right" data-aos-once="true">
                    <i className="fa fa-arrow-left" />  &emsp;&emsp;&emsp;
                    <i className="fa fa-arrow-right" />
                </div>
               <ul class="list-group mx-auto text-center">
               <br />
                <button
                href=""
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "First Name"
                 secondaryText ={firstName}>
                   First Name: 
                   <br />
                   {firstName}
                </button>       
                <button
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Last Name"
                 secondaryText ={lastName}
                >
                    Second Name:
                    <br />
                    {lastName}
                </button>     
                <button
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Product"
                 secondaryText ={product}
                >
                    Product:   
                    <br />
                    {product}
                </button>
                <button
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "email"
                 secondaryText ={email}
                >
                    Email:
                    <br />
                    {email}
                </button>
                <button
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Phone"
                 secondaryText ={phone}
                >
                     Phone:
                     <br />
                     {phone}
                </button>
                <button
                 class="list-group-item list-group-item-action text-center" 
                 PrimaryText= "Feedback"
                 secondaryText ={feedback}
                >
                   Feedback:  
                    <br />
                   {feedback}
                </button>
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

