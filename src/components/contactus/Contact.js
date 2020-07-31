import React, { Component } from 'react'
import { Map, Form } from './ContactMap.js'
import Footer from '../Footer'

export default class ContactNew extends Component {
    render() {
        return (
            <div>  
                <Form />          
                <Map /> 
                       
                <br />
                <Footer/>       
            </div>         
        );
    }
}
