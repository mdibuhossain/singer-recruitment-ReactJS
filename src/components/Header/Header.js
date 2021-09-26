import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="bg-secondary text-center head-content">
                <h1 className="text-light pt-4">Singers Recruitment</h1>
                <p className="text-light fs-5">Prosperity is only an instrument to be used, not a deity to be worshipped.</p>
                <h2 className="text-light mb-4">Total budget: <strong>200 Billion</strong></h2>
            </div>
        </div>
    );
};

export default Header;