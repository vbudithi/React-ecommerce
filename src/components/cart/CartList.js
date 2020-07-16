import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartList extends Component {
    render() {
        const { value } = this.props;
        const { cart } = value;
           console.log(value, cart);

        return (
            <div className="container-fluid">
                {cart.map(item => {
                    return <CartItem key={item.id} item={item} value={value} />
                })}
                 <CartItem />             
            </div>
        );
    }

}