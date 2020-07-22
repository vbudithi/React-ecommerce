import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className= "container-fluid text-center d-none d-lg-block"> 
              <div className="row">
                <div className="col-10 mx-auto col-lg-2 font-weight-bold">
                    <p className="text-uppercase">product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">name </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">price (in u.s dollar)</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">quantity </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">total (in u.s dollar)</p>
                </div>
              </div>
            </div>
        );
    }
}