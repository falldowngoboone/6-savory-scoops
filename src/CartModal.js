import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';

import Cart from './Cart.js';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as CartIcon } from './cart.svg';
import { useOrderContext } from './order.js';

import '@reach/dialog/styles.css';
import * as styles from './CartModal.module.scss';

function CartModal() {
  const [showCart, setShowCart] = React.useState(false);
  const { orderItems } = useOrderContext();

  React.useEffect(() => {
    function handleKeydown(e) {
      const { key } = e;

      if ('c' === key) {
        setShowCart((s) => !s);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <>
      <button
        className={styles.cartIcon}
        onClick={() => {
          setShowCart(true);
        }}
      >
        <CartIcon aria-hidden="true" focusable="false" />
        <span role="presentation" className="visually-hidden">
          Cart
        </span>
        {Boolean(orderItems.length) && `(${orderItems.length})`}
      </button>
      <DialogOverlay
        isOpen={showCart}
        onDismiss={() => {
          setShowCart(false);
        }}
        className={styles.overlay}
      >
        <DialogContent
          className={styles.wrapper}
          aria-labelledby="cart-heading"
        >
          <button className={styles.close} onClick={() => setShowCart(false)}>
            <Close />
            <span className="visually-hidden">Close</span>
          </button>
          <Cart />
        </DialogContent>
      </DialogOverlay>
    </>
  );
}

export default CartModal;
