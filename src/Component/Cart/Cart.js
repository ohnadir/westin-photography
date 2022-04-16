import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Cart = () => {
    const [cart] = useContext(CartContext);
    return (
        <div>
            <div>
                <h2>This cart section</h2>
            </div>
        </div>
    );
};

export default Cart;