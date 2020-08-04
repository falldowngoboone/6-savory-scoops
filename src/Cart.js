import React from 'react';
import { Link } from '@reach/router';

import { formatCurrency, processPricing } from './utils.js';
import { useOrderContext } from './order.js';

import * as appStyles from './App.module.scss';
import * as styles from './Cart.module.scss';

function Cart() {
  const { orderItems } = useOrderContext();
  const { subtotal, tax, total } = processPricing(orderItems);

  return (
    <div className={styles.cart}>
      <h2 className={styles.title} id="cart-heading">
        Your Order ({orderItems.length || 'no'}{' '}
        {orderItems.length !== 1 ? 'items' : 'item'})
      </h2>
      {orderItems.length > 0 ? (
        <>
          <dl className={styles.pricing}>
            <dt className={styles.priceType}>Subtotal</dt>
            <dd className={styles.price}>{formatCurrency(subtotal)}</dd>
            <dt className={styles.priceType}>Tax</dt>
            <dd className={styles.price}>{formatCurrency(tax)}</dd>
            <dt className={styles.priceType}>Total</dt>
            <dd className={styles.price}>{formatCurrency(total)}</dd>
          </dl>
          <Link className={appStyles.button} to="/checkout">
            Checkout
          </Link>
          <h3>All the deliciousness</h3>
          {orderItems.length > 5 && (
            <p>Oh, my, you must have a death wish...</p>
          )}
          <ul>
            {orderItems.map((item) => (
              <OrderItem key={item.orderId} {...item} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Oh, bummer! What's the matter, you don't think ice cream needs meat?
          Don't answer that. Just muster up the courage and chuck some flavors
          in here!
        </p>
      )}
    </div>
  );
}

function OrderItem({ image, name, price }) {
  return (
    <li>
      <p>{name}</p>
      <p>${price}</p>
      <img src={image} height="320" width="320" alt="" />
    </li>
  );
}

export default Cart;
