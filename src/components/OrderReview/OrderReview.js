import React from 'react';
import useCart from '../../hooks/useCart';
import { clearTheCart, deleteFromDB } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useProducts from '../useProducts/useProducts';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()

    const removeItem = (key) => {
        const newCart = cart.filter(product => (product.key !== key))
        setCart(newCart)
        deleteFromDB(key)
    }
    const orderNowHandle = () => {
        if (cart.length) {
            clearTheCart()
            // i can go to the location by the way shown below and also by attaching Link tag to the button and setting up the path by to="/locationName"
            history.push('/order')
        }
    }
    return (
        <div>
            <div className="top-margin"></div>
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
                    <Cart cart={cart} >
                        <button onClick={orderNowHandle} className="cart-btn px-3"><small>Order Now</small></button>
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default OrderReview;