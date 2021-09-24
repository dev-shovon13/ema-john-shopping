import React from 'react';
// cart button
import '../Product/Product.css'

const Cart = (props) => {
    const { cart } = props
    let total = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity
    }

    let shipping = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        shipping = shipping + product.shipping * product.quantity
    }
    const totalBeforeTax = total + shipping
    const tax = totalBeforeTax * 0.1
    const finalTotal = totalBeforeTax + tax


    return (
        <>
            <div className="text-center">
                <h5>Order Summary</h5>
                <p>Items ordered: {cart.quantity}</p>
            </div>
            <div >
                <div className="d-md-flex justify-content-between">
                    <p className="m-0"><small>Items Price: </small></p>
                    <p className="m-0"><small><span className="text-warning fw-bold">$</span> {total.toFixed(2)}</small></p>
                </div>
                <div className="d-md-flex justify-content-between">
                    <p className="m-0"><small>Shipping & Handling: </small></p>
                    <p className="m-0"><small><span className="text-warning fw-bold">$</span> {shipping.toFixed(2)}</small></p>
                </div>
                <div className="d-md-flex justify-content-between">
                    <p className="m-0"><small>Total before tax: </small></p>
                    <p className="m-0"><small><span className="text-warning fw-bold">$</span> {totalBeforeTax.toFixed(2)}</small></p>
                </div>
                <div className="d-md-flex justify-content-between">
                    <p className="m-0"><small>Estimated Tax: </small></p>
                    <p className="m-0"><small><span className="text-warning fw-bold">$</span> {tax.toFixed(2)}</small></p>
                </div>
                <div className="d-md-flex justify-content-between">
                    <h6 className="text-danger fw-bold">Order Total: </h6>
                    <h6 className="text-danger fw-bold">$ {finalTotal.toFixed(2)}</h6>
                </div>
            </div>
            <div className="text-center mt-3">
                <button className="cart-btn px-3"><small>Review Your Order</small></button>
            </div>
        </>
    );
};

export default Cart;