const addToCartLocalStorage = (id) =>{
    // Retrive the shopping cart from localStorage
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || {};

    // add the item to the cart in localStorage or increase the cart quantity
    shoppingCart[id] = shoppingCart[id] ? shoppingCart[id] + 1 : 1;

    // Update the shppping cart in localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getShoppingCart = () =>{
    // Retrive the shopping cart from localStorage
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || {};

    // Return the shoppin cart
    return shoppingCart;
}

export{addToCartLocalStorage, getShoppingCart}

// watch from 6: