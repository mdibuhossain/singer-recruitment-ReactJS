import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Singerlist from '../Singerlist/Singerlist';
import './Cart.css';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Singericon = <FontAwesomeIcon icon={faHeadphones} />;

const Cart = (props) => {
    const [totalCost, setTotalCost] = useState(0);
    const cart = props.cart;
    return (
        <div className="text-center">
            <div>
                <h3 className="text-primary">{Singericon} Singers Hired: {cart.length}</h3>
                <h5 className="p-3">Total Cost: ${totalCost}</h5>
                {
                    cart.map(singer => <Singerlist key={singer._id} singer={singer}></Singerlist>)
                }
            </div>
        </div>
    );
};

export default Cart;