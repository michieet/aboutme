import React from 'react';

 //Links are being directed from here instead 

export default function Header(props) {

    const {countItems} = props;

    return (  
            <header className='row block center'>
                <div>
                    <a href='/'>
                        <h1>Home</h1>
                    </a>
                </div>
                <div>
                    <a href='/cartpage'>
                        Cart {' '}
                        {/* If exists then render button, otherwise render empty string */}
                        {countItems ? (
                            <button className='badge'>{countItems}</button>
                        ) : ('')}
                    </a>{' '}              
                    <a href='/aboutme'>About Me</a>{' '}
                    <a href='/shopping'>Shop Here</a>
                </div>
            </header>
    );
};