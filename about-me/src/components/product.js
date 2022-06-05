import React from 'react'

export default function Product(props) {
    //Defining properties of 'props'.
    const {product, onAdd} = props;

  return (
    <div>
      <img className='small' src={product.image} alt={product.title}></img>
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <div>
          <button onClick={()=>onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
};
