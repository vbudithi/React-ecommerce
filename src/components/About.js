import React, { Component } from 'react'
import Footer from './Footer'
import Title from './Title';

export default class About extends Component {

    render() {
        return (
            <React.Fragment>
                 <section class="text-center about">
                      <Title name = "About" title="Us" />
                    <br />
                     <div class="container">
                        <div class="row">
                          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
                            <span class="fa fa-phone"></span>
                            <br />
                            <h2>+019876543210</h2>
                            <br />
                            <br />
                            <p class=""> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled</p>
                        </div>
                          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                            <span class="fa fa-info"></span>
                            <br />
                            <h2> FAQ's </h2>
                            <br />
                            <br />
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            </p>
                        </div>
                        <div class="clearfix visible-md-block visible-sm-block"></div>
                          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                            <span class="fa fa-file"></span>
                            <br />
                            <h2>T & C</h2>
                            <br />
                            <br />
                            <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        </div>                          
                    </div>                        
                    <section class="features-icons text-center">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-5">
                            <div class="features-icons-icon d-flex">
                                <i class="icon-screen-desktop m-auto text-primary"></i>
                            </div>
                            <h3>Exclusive offers</h3>
                            <p class="lead">Christmas Sale. hurry up!!!!!!!!</p>
                            <br />
                                <i class ="fa fa-share" ></i>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex">
                                <i class="icon-layers m-auto text-primary"></i>
                            </div>
                            <h3>24 X 7 Support</h3>                       
                            <p class="lead mb-0">Increased customer support</p>
                            <br />
                               <i class ="fa fa-user" ></i>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex">
                                <i class="icon-check m-auto text-primary"></i>
                            </div>
                            <h3>Product Exchange</h3>                      
                            <p class="lead mb-0">Exchange up to 21 days. T&C apply.</p>
                            <br />
                                <i class ="fa fa-handshake" ></i> 
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

                    <hr />         
                    </div> 
                       <div class="row">
                          <div class="col-xl-6 mx-auto">
                              <h2 class="mb-5">Subscribe to get more offers and exclusive deals only today**</h2>
                           </div>
                       <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                       <form>
                        <div class="form-row">
                            <div class="col-12 col-md-9 mb-2 mb-md-0">
                                 <input
                                   type="email" 
                                   class="form-control" 
                                   id="email" 
                                   placeholder=" email address....."           
                                 />
                            </div>                                    
                                <button
                                  type="submit" 
                                  class="btn btn-primary"
                                 >Subscribe</button>
                        </div>
                        </form>
                       </div>
                    </div>
                    </section>
                 <Footer />
            </React.Fragment>         
        )
    }
}
