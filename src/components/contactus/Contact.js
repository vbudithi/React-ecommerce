import React, { Component } from 'react'
import { Map, Form } from './ContactMap.js'

export default class ContactNew extends Component {
    render() {
        return (
            <div>          
                <Map />
                <Form />             
            </div>
        )
    }
}
