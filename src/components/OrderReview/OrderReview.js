import React from 'react';
import useCart from '../../hooks/useCart';
import { deleteFromDB } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useProducts from '../useProducts/useProducts';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const removeItem = (key) => {
        const newCart = cart.filter(product => (product.key !== key))
        setCart(newCart)
        deleteFromDB(key)
    }
    return (
        <div>
            <div className="bg-secondary py-1 text-center text-white fixed-top-2">
                <h4>Order Review</h4>
            </div>
            <div className="row products container mx-auto product-margin">
                <div className="col-7 col-md-9 p-3 border-end">
                    {
                        cart.map(product => <ReviewItem key={product.key} removeItem={removeItem} product={product} />)
                    }
                </div>
                <div className="cart-list col-5 col-md-3 p-3">
                    <Cart cart={cart} />
                </div>
            </div>
        </div >
    );
};

export default OrderReview;