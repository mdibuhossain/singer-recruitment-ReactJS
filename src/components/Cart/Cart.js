import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Singerlist from '../Singerlist/Singerlist';
import './Cart.css';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Singericon = <FontAwesomeIcon icon={faHeadphones} />;

const Cart = (props) => {
    const cart = props.cart;
    let totalCost = 0;
    // console.log(cart);
    for (const singer in cart) {
        // console.log(cart[singer].salary);
        totalCost += cart[singer].salary;
    }
    return (
        <div className="text-center">
            <div>
                <h3 className="text-primary">{Singericon} Singers Hired: {cart.length}</h3>
                <h5 className="p-3">Total Cost: ${totalCost}</h5>
                {
                    cart.map(singer => <Singerlist key={singer._id} singer={singer}></Singerlist>)
                }
                <button onClick={props.purchasedHandler} className="btn btn-danger">Purchased</button>
            </div>
        </div>
    );
};

export default Cart;