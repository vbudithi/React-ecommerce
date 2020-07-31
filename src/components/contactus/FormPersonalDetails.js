import React, { Component } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default class FormPersonalDetails extends Component {
    continue = e => {
         e.preventDefault();
         this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        Aos.init({duration:1000}); 
        return (
            <React.Fragment>
            <div>            
               <div className="container">
                        <form>
                            <br /><br /><br /> <br /> <br /> 
                         <div className="row">
                            <div className="col-md-6 mx-auto form-group text-center"> 
                              <div data-aos="fade-right" data-aos-once="true">
                              <i className="fa fa-arrow-left" /> &emsp;&emsp;&emsp;
                                <i className="fa fa-arrow-right" />
                              </div>       
                            <br />
                            <br />
                                <label for="company">Product (phone brand)</label>
                                <input
                                type="text" 
                                className="form-control" 
                                placeholder="product name" 
                                id="company"
                                onChange={handleChange('product')} 
                                defaultValue ={values.product}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto form-group text-center">
                                <label for="phone">Phone Number</label>
                                <input
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                placeholder="phone"
                                onChange={handleChange('phone')} 
                                defaultValue ={values.phone}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mx-auto form-group text-center">  
                                <label for="phone">Feedback / Issue</label>
                                <textarea
                                type="text" 
                                className="form-control" 
                                placeholder="" 
                                rows="2"
                                onChange={handleChange('feedback')} 
                                defaultValue={values.feedback}
                                />
                                <br />
                                <br />
                                <button
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={this.back}
                                    >Back
                                </button>
                                &emsp;
                                 <button
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={this.continue}
                                    >continue
                                </button>
                            </div>
                        </div>                  
                           
                        </form>
                    
                </div>

            </div>
            </React.Fragment>
          
        )
    }
}