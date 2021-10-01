import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakeDB';

const useCart = (products) => {
    const [cart, setCart] = useState([])
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
    return [cart, setCart]
};

export default useCart;