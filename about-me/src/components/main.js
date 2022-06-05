import React from 'react';
import Product from './product';

export default function Main(props) {
    
    const {products, onAdd} = props;
    
    return (
        <main className='block col-2'>
            <h2>Products</h2>
            <div className='row box'>
                {products.map((product) => (
                    // Need to use 'key' because then .map can identify.
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
};