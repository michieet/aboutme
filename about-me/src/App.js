import './App.css';
import Header from './components/header';
import Main from './components/main';
import Cart from './components/cart';
import data from './data';
import { useState } from 'react';

function App() {

  const {products} = data;

  const [cartItems, setCartItems] = useState([]);

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
  }

  return (
    <div className='App'>
      <Header countItems={cartItems.length}></Header>
      <div className='row'>
        {/* Main component will be the one rendering 'products' */}
        <Main 
          onAdd={onAdd} 
          products={products}>  
        </Main>
        <Cart 
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartItems={cartItems}>
        </Cart>
      </div>
    </div>
  );
}

export default App;
