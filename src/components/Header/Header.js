import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="bg-secondary text-center head-content">
                <h1 className="text-light pt-4">Singers Recruitment</h1>
                <h2 className="text-light">Total budget: <strong>200 Billion</strong></h2>
            </div>
        </div>
    );
};

export default Header;