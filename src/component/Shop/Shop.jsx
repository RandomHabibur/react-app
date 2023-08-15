import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToCartLocalStorage, getShoppingCart } from '../LocalStorage/LocalStorage';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() =>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
    },[])

    const handleAddToCart = (product) => {
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToCartLocalStorage(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;