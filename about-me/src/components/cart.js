import React from 'react';

export default function Cart(props) {

    const {cartItems, onAdd, onRemove} = props;
    
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
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        {/* Use arrow-fn to pass item to the add-fn */}
                        <button onClick={()=>onAdd(item)} className='add'>+</button>
                        <button onClick={()=>onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {/* Item qty multiply by price fixed with 2 decimals. */}
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
        </aside>
    );
};