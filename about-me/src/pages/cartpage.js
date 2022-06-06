import React from 'react';
import Header from '../components/header';
import Cart from '../components/cart';

//Trying to implement Cart Page, but suspecting it isnt able to pull data because there is no localcache/ storage of data to pull from?
export default function Cartpage() {
  return (
    <div>
        <Header></Header>
        <div className='row'>
            <Cart></Cart>
        </div>
    </div>
    );
};
