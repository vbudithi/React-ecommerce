import React, { Component } from 'react'
import styled from 'styled-components';

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
        return (
            <React.Fragment>
            <div>            
               <div class="container">
                        <form>
                            <br /><br /><br />
                         <div class="row">
                            <div class="col-md-6">
                                <div class="form-group text-center">
                                <label for="company">Product (phone brand)</label>
                                <input
                                type="text" 
                                class="form-control" 
                                placeholder="product name" 
                                id="company"
                                onChange={handleChange('product')} 
                                defaultValue ={values.product}
                                />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group text-center">
                                <label for="phone">Phone Number</label>
                                <input
                                type="tel" 
                                class="form-control" 
                                id="phone" 
                                placeholder="phone"
                                onChange={handleChange('phone')} 
                                defaultValue ={values.phone}
                                />
                                </div>
                        </div>
                            </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group text-center">
                                <label for="phone">Feedback / Issue</label>
                                <textarea
                                type="text" 
                                class="form-control" 
                                placeholder="" 
                                rows="2"
                                onChange={handleChange('feedback')} 
                                defaultValue={values.feedback}
                                />
                                </div>
                            </div>
                        </div>                  
                            <button
                            type="button" 
                            class="btn btn-primary"
                            onClick={this.continue}
                            >continue
                            </button>
                         &emsp;
                            <button
                            type="button" 
                            class="btn btn-secondary"
                            onClick={this.back}
                            >Back
                            </button>
                        </form>
                </div>

            </div>
            </React.Fragment>
          
        )
    }
}