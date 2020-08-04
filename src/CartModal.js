import React from 'react';
import { Dialog } from '@reach/dialog';

import Cart from './Cart';
import { ReactComponent as Close } from './close.svg';
import { useOrderContext } from './order';

import '@reach/dialog/styles.css';
import * as appStyles from './App.module.scss';

function CartModal() {
  const [showCart, setShowCart] = React.useState(false);
  const { orderItems } = useOrderContext();

  return (
    <>
      <button
        className={appStyles.button}
        onClick={() => {
          setShowCart(true);
        }}
      >
        {orderItems.length ? `Cart (${orderItems.length})` : 'Cart'}
      </button>
      <Dialog
        isOpen={showCart}
        onDismiss={() => {
          setShowCart(false);
        }}
        className="drawer"
        aria-labelledby="cart-heading"
      >
        <>
          <button className="drawer__close" onClick={() => setShowCart(false)}>
            <Close />
          </button>
          <Cart />
        </>
      </Dialog>
    </>
  );
}

export default CartModal;
