import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <div className="bg-secondary text-center head-content">
                <h1 className="text-light pt-5">Singers Recruitment</h1>
                <h2 className="pb-4">Total budget: 10 Billion Dollar</h2>
            </div>
        </div>
    );
};

export default Header;