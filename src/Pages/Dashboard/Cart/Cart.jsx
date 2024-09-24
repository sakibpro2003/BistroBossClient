import React from 'react';
import useCart from '../../../hooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)
    return (
        <div className='flex justify-between'>
            <h2 className="text-6xl">
            Total item: {cart.length}

            </h2>
            <h2 className="text-6xl">
                Total item: ${totalPrice}
            </h2>
        </div>
    );
};

export default Cart;