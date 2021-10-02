import React from 'react';

const ReviewItem = (props) => {
    const { key, name, img, seller, price, quantity, shipping } = props.product
    return (
        // <div className="border-bottom pb-3 mb-2">
        <div className="row border-bottom p-2 align-items-center">
            <div className="text-center col-md-4">
                <img src={img} alt="" className="product-img img-fluid" />
            </div>
            <div className="col-md-8">
                <h5 className="text-primary fw-normal mb-0">{name}</h5>
                <div>
                    <p className="text-secondary mb-1">by- <span className="text-dark fw-bold">{seller}</span></p>
                    <div className="d-flex align-items-center">
                        <h5 className="text-warning fw-bold w-50 mb-0">$ {price}</h5>
                        <p className="w-50 mb-0">Quantity: <span className="text-danger fw-bold">{quantity}</span> </p>
                    </div>
                    <p className="m-0 text-secondary mb-2">Shipping Cost: <span className="text-dark fw-bold">{shipping}</span></p>
                    <p className="fw-bold">Price: <span className=" text-warning">{price} <span className="text-dark">x</span> <span className="text-danger">{quantity}</span> = {(price * quantity).toFixed(2)}</span> </p>
                    <div className="text-center mt-3">
                        <button className="cart-btn px-3" onClick={() => props.removeItem(key)}><small>Remove</small></button>
                    </div>
                </div>
            </div>

        </div>
        // </div>
    );
};

export default ReviewItem;