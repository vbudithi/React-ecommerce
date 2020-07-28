import React, { Component } from 'react'

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
                     <i className="far fa-smile"></i>      
                  </div>          
              </div>     
         </React.Fragment>
          
        )
    }
}

