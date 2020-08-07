import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';

import Cart from './Cart';
import { ReactComponent as Close } from './close.svg';
import { useOrderContext } from './order';

import '@reach/dialog/styles.css';
import * as appStyles from './App.module.scss';
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
        className={appStyles.button}
        onClick={() => {
          setShowCart(true);
        }}
      >
        {orderItems.length ? `Cart (${orderItems.length})` : 'Cart'}
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
          </button>
          <Cart />
        </DialogContent>
      </DialogOverlay>
    </>
  );
}

export default CartModal;
