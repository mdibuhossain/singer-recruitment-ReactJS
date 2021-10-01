import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Singerlist from '../Singerlist/Singerlist';
import './Cart.css';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { deleteFromDb } from '../../utilities/fakedb';
import { useState } from 'react';

const Singericon = <FontAwesomeIcon icon={faHeadphones} />;

const Cart = (props) => {
    const cart = props.cart;
    const { removeHandler } = props;
    let totalCost = 0;
    // console.log(cart);
    for (const singer in cart) {
        totalCost += cart[singer].salary;
    }


    return (
        <div className="text-center">
            <div>
                <h3 className="text-primary">{Singericon} Singers Hired: {cart.length}</h3>
                <h5 className="p-3">Total Cost: ${totalCost}</h5>
                {
                    cart.map(singer => <Singerlist key={singer._id} removeHandler={removeHandler} singer={singer}></Singerlist>)
                }
                <button onClick={props.purchasedHandler} className="btn btn-danger">Purchased</button>
            </div>
        </div>
    );
};

export default Cart;