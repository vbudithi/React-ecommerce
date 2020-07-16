import React, { Component } from 'react'
import styled from 'styled-components';
import Title from '../Title';

export default class FormUserDetails extends Component {
    continue = e => {
         e.preventDefault();
         this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
            <div>      
              <div class="container ">
                <form>
                  < br/>
                  <Title name = "Contact" title="Form" />  
                  <br />
                  <br />
                  <div class="row ">
                    <div class="col-md-6">
                      <div class="form-group text-center ">
                        <label for="first">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="first name"
                          id="first"
                          onChange= {handleChange('firstName')} 
                          defaultValue={values.firstName}
                        />
                      </div>
                    </div>
                  </div>   
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group text-center">
                        <label for="last">Last Name</label>
                        <input
                        type="text" 
                        class="form-control" 
                        placeholder="last name" 
                        id="last"
                        onChange= {handleChange('lastName')} 
                        defaultValue ={values.lastName}
                        />
                      </div>
                    </div>    
                  </div>               
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group text-center">
                        <label for="email">Email address</label>
                        <input
                        type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="email" 
                        onChange={handleChange('email')} 
                        defaultValue={values.email}
                        />
                      </div>
                    </div>
                    </div>
                    <br />
                  <button
                  type="submit" 
                  class="btn btn-primary"
                  onClick={this.continue}
                  >Continue</button>
                </form>
              </div>

         </div>
         </React.Fragment>
          
        )
    }
}


