import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock, features, shipping } = props.product
    // console.log(props);
    return (
        <div className="row border-bottom p-2 align-items-center">
            <div className="text-center col-md-4 ">
                <img src={img} alt="" className="product-img img-fluid" />
            </div>
            <div className="col-md-8">
                <h5 className="text-primary fw-normal mb-0">{name}</h5>
                <div className="product-info row">
                    <div className="info-left p-3 col-lg-6 position-relative">
                        <div>
                            <p className="text-secondary">by- <span className="text-dark fw-bold">{seller}</span></p>
                            <h5 className="text-warning fw-bold">$ {price}</h5>
                            <p className="m-0 text-secondary mb-3">Shipping Cost: <span className="text-dark fw-bold">{shipping}</span></p>
                            <p>only <span className="text-danger fw-bold">{stock}</span> left in stock - order soon</p>
                        </div>
                        <div className="position-absolute bottom-0">
                            <button className="add-btn px-md-5 px-3" onClick={() => props.handleAddToCart(props.product)}><small><FontAwesomeIcon icon={faShoppingCart} /> add to cart</small></button>
                            <button className="add-btn px-md-5 px-3" onClick={() => props.handleRemove(props.product)}><small><FontAwesomeIcon icon={faShoppingCart} /> delete from cart</small></button>
                        </div>
                    </div>
                    <div className="info-right p-3 col-lg-6">
                        <div className="text-warning mb-3">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <h5>Features</h5>
                        {
                            features.map(feature => {
                                return (
                                    <p className="m-0 text-secondary"><small><span className="fw-bold">{feature.description}:</span> {feature.value}</small></p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;