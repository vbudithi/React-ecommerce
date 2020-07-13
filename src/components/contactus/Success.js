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
                <div class= "text-center">
                    <h1>
                       Thanks for your submission
                    </h1>
                    <h3>
                     You will receive an email soon. 
                    </h3>
                </div>         
         </React.Fragment>
          
        )
    }
}

