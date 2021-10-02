import React from 'react';
import image from '../../images/giphy.gif'

const OrderDone = () => {
    return (
        <div>
            <div className="bg-success py-1 text-center text-white fixed-top-2">
                <h4>Order Completed</h4>
            </div>
            <div className="product-margin text-center">
                <img src={image} alt="" className="mt-4 img-fluid" />
            </div>
        </div>
    );
};

export default OrderDone;