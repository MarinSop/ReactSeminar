import React, { Component } from 'react'
import './Cart.css'

export default class Cart extends Component {
  render() {


    const closeCart = () =>{
        const cart = document.getElementById("cart");
        cart.style.display = "none";
        
    }
    return (
        <div className="cart-window" id="cart">
            <div className="cart-content">
                <span className="close-btn" onClick={closeCart}>&times;</span>
                <div className="products">
                    <h1>Your products:</h1>
                </div>
                <div className="form-details">
                    <h2>Your details</h2>
                    <form>
                        <fieldset>
                            <label for="firstname">First name: </label>
                            <input type="text" name="firstname"/>
                            <label for="lastname">Last name: </label>
                            <input type="text" name="lastname"/>
                        </fieldset>
                        <fieldset>
                            <label for="email">E-mail: </label>
                            <input type="email" name="email"/>
                            <label for="address">Address: </label>
                            <input type="text" name="address"/>
                            <label for="Male">Male </label>
                            <input type="radio" name="gender" value="Male"/>
                            <label for="Female">Female </label>
                            <input type="radio" name="gender" value="Female" />
                        </fieldset>
                        <fieldset>
                            <label for="creditcard">Credit card number: </label>
                            <input type="number" name="creditcard"/>
                            <label for="CVC">CVC: </label>
                            <input type="number" name="CVC"/>
                            <label for="expdate">Expiration date: </label>
                            <input type="date" name="expdate"/>
                        </fieldset>
                        <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        </div>

    )
  }
}
