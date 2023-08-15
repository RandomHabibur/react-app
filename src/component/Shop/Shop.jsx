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

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for(const id in storedCart){
            //step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
            // console.log('added Products',addedProduct)
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) => {
        console.log('product added', product);

        // const newCart = [...cart, product];

        // optional
        let newCart = [];
        // if product doesn't exist in the cart, then set quantity = 1;
        // if exist update quantity by 1
        const exists = cart.find(product => product.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(product => product.id !== product.id)
            newCart = [...remaining, exists]
        }
        // optional end

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