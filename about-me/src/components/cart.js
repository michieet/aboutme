import React from 'react';

export default function Cart(props) {

    const {cartItems, onAdd, onRemove} = props;
    //Calculating subtotal of items
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.17;
    const shipPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shipPrice;
    
    return (
        <aside className='block col-1'>
            <h2>Items</h2>
            <div>
                {/* Conditional Rendering */}
                {cartItems.length === 0 && <div>Cart is empty!</div>}
            </div>
            {/* For each item, render a <div>, set key to prevent unique error. */}
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.title}</div>
                    <div className='col-2'>
                        {/* Use arrow-fn to pass item to the add-fn */}
                        <button onClick={()=>onAdd(item)} className='add'>
                            +
                        </button>
                        <button onClick={()=>onRemove(item)} className='remove'>
                            -
                        </button>
                    </div>
                    <div className='col-2 text-right'>
                        {/* Item qty multiply by price fixed with 2 decimals. */}
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                        <div className='row'>
                            <div className='col-2'>Items Price</div>
                            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Tax Price</div>
                            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Shipping Price</div>
                            <div className='col-1 text-right'>${shipPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <strong>Total Price</strong>   
                            </div>
                            <div className='col-1 text-right'>
                                <strong>${totalPrice.toFixed(2)}</strong>                           
                            </div>
                        </div>
                    <hr/>
                    <div className='row'>
                        {/* Implement alert for checkout */}
                        <button onClick={() => alert('Checkout!')}>
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
};