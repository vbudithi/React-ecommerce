import React, { Component } from 'react'
import Title from '../Title';
import Aos from "aos";

export default class FormUserDetails extends Component {
    continue = e => {
         e.preventDefault();
         this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        Aos.init({duration:1000});   
        return (
            <React.Fragment>
            <div>      
              <div className="container ">
                <form>
                  < br/>
                  <Title name = "Contact" title="Us" />  
                  <br />
                
                  <div className="row">
                    <div className="col-md-6 mx-auto form-group text-center">
                     <div data-aos="fade-right" data-aos-once="true">
                     <i className="fa fa-arrow-right" />
                     </div>
                    <br />
                    <br />
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
                  <div className="row">
                    <div className="col-md-6 mx-auto form-group text-center">
                        <label for="last">Last Name</label>
                        <input
                        type="text" 
                        className="form-control" 
                        placeholder="last name" 
                        id="last"
                        onChange= {handleChange('lastName')} 
                        defaultValue ={values.lastName}
                        />
                    </div>   
                  </div>               
                  <div className="row">
                    <div className="col-md-6 mx-auto form-group text-center">
                        <label for="email">Email address</label>
                        <input
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="email" 
                        onChange={handleChange('email')} 
                        defaultValue={values.email}
                        />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-6 mx-auto form-group text-center"> 
                      <button
                      type="submit" 
                      className="btn btn-primary"
                      onClick={this.continue}
                      >Continue
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


