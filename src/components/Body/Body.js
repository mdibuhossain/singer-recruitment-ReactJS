import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import { addToDb, clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import './Body.css';

const Body = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, []);

    useEffect(() => {
        if (singers.length) {
            const savedData = getStoredCart();
            const newData = [];
            for (const id in savedData) {
                const locateData = singers.find(singer => singer._id === id);
                newData.push(locateData);
            }
            setCart(newData);
        }
    }, [singers]);

    const hireSingerHandler = (singer) => {
        const findSinger = cart.find(tmpSinger => tmpSinger._id === singer._id);
        if (!findSinger) {
            const newCart = [...cart];
            newCart.push(singer);
            setCart(newCart);
        }
        setCounter(counter + 1);
        addToDb(singer._id);
    };

    const purchasedHandler = () => {
        clearTheCart();
        setCart([]);
    }
    const removeHandler = (id) => {
        deleteFromDb(id);
        const updateSingerList = cart.filter(singer => singer._id !== id);
        setCart(updateSingerList);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="singers-container">
                        {
                            singers.map(singer => <Singer
                                key={singer._id}
                                singer={singer}
                                hireSingerHandler={hireSingerHandler}
                            >
                            </Singer>)
                        }
                    </div>
                </div>
                <div className="col-3">
                    <Cart cart={cart} removeHandler={removeHandler} purchasedHandler={purchasedHandler}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Body;