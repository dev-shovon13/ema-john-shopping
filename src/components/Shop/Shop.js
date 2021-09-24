import React, { useEffect, useState } from 'react';
import { addToDB, deleteFromDB, getStoredCart } from '../../utilities/fakeDB';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDB(product.key)
    }
    const handleRemove = (product) => {
        deleteFromDB(product.key)
    }
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    useEffect(() => {
        const savedCart = getStoredCart()
        const storedProducts = []
        if (products.length) {
            for (const key in savedCart) {
                const productsAdded = products.find(product => product.key === key)
                if (storedProducts) {
                    const quantity = savedCart[key]
                    productsAdded.quantity = quantity
                    storedProducts.push(productsAdded)
                }
            }
        }
        setCart(storedProducts)
    }, [products])

    const handleSearch = event => {
        const searchText = event.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
    }

    return (
        <>
            <Header handleSearch={handleSearch} />
            <div className="row products container mx-auto">
                <div className="product-list col-7 col-md-9 p-3 border-end">
                    {
                        displayProducts.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart} handleRemove={handleRemove} />)
                    }
                </div>
                <div className="cart-list col-5 col-md-3 p-3 sticky">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;