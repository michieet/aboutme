import Header from '../components/header';
import Main from '../components/main';
import Cart from '../components/cart';
import { useEffect, useState } from 'react';
// import data from './data';


export default function Shopping() {

// const {products} = data;

const [fakeProducts, setFakeProducts] = useState([]);
const [cartItems, setCartItems] = useState([]);

//useEffect hook to handle updates. 
//QN: Does it matter if useEffect code is written above or below the fetching of API?
useEffect(() => {
    fakeAPI();
}, []);  

//Fetch fakestoreapi products
const fakeAPI = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    console.log(res);
    //Converting data to JSON;
    const jsonData = await res.json();
    console.log(jsonData);
    setFakeProducts(jsonData);
};

const onAdd = (product) => {
    //Finding whether the exact item exists
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
        //If exact product exists, find that product and increase qty by 1, while the other products remain same.
        // If true '?', then increase qty by 1. If is other products, leave it as 'x'.
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
        );
    } else {
        //If doesn't exist, deconstruct items in cartItems array, and join with products.
        //Qty is 1 because at the start, product should be listed as x1 qty.
        setCartItems([...cartItems, {...product, qty: 1}]);
    }
};

const onRemove = (product) => {
    //Get product from cartItems. 
    const exist = cartItems.find((x) => x.id === product.id);
    //If condition: If product is qty 1 in cartItems then it will be removed.
    if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
        //Decrease qty.
        setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
};


    return (
        <div>
            <Header countItems={cartItems.length}></Header>
                <div className='row'>
                    {/* Main component will be the one rendering 'products' */}
                    <Main 
                    onAdd={onAdd} 
                    products={fakeProducts}>  
                    </Main>

                <Cart 
                    onAdd={onAdd} 
                    onRemove={onRemove} 
                    cartItems={cartItems}>
                </Cart>
                </div>
        </div>
    );
};