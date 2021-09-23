import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row products container mx-auto">
            <div className="product-list col-9 p-3 border-end">
                {
                    products.map(product => <Product key={product.key} {...product} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cart-list col-3 p-3 sticky">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;