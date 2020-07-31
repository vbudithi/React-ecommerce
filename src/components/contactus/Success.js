import React, { Component } from 'react';
import Aos from "aos";

export default class Success extends Component {
    continue = e => {
         e.preventDefault();
         this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {    
        Aos.init({duration:1000}); 
        return (
            <React.Fragment>
              <div className="container">
                <div class= "text-center mx-auto">
                    <br />
                    <br />
                    <h1>
                       Thanks for your submission
                    </h1>
                    <h3>
                     You will receive an email soon. 
                     </h3>
                     <br />
                      <div data-aos="fade-up" data-aos-once="true">
                         <i className="far fa-smile"></i>      
                     </div>
                  
                  </div>          
              </div>     
         </React.Fragment>
          
        )
    }
}

