import React from 'react';
import { Link } from '@reach/router';

import { formatCurrency, processPricing } from './utils.js';
import { useOrderContext } from './order.js';

import * as buttonStyles from './Button.module.scss';
import * as styles from './Cart.module.scss';

function Cart() {
  const { orderItems } = useOrderContext();

  return (
    <div role="presentation" className={styles.cart}>
      <h2 className={styles.title} id="cart-heading">
        Your Order{' '}
        <span role="presentation" className={styles.tally}>
          ({orderItems.length || 'no'}{' '}
          {orderItems.length !== 1 ? 'items' : 'item'})
        </span>
      </h2>
      {orderItems.length > 0 ? (
        <>
          <PriceList orderItems={orderItems} />
          <Link className={buttonStyles.button} to="/checkout">
            Checkout
          </Link>
          <h3 className={styles.subheading}>All the deliciousness</h3>
          {orderItems.length > 5 && (
            <p>
              <em>Oh, my, you must have a death wish...</em>
            </p>
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

function PriceItem({ type, children: amount }) {
  return (
    <>
      <dt className={styles.priceType}>{type}</dt>
      <dd className={styles.price}>{formatCurrency(amount)}</dd>
    </>
  );
}

function PriceList({ orderItems }) {
  const { subtotal, tax, total } = processPricing(orderItems);

  return (
    <dl className={styles.pricing}>
      <PriceItem type="Subtotal">{subtotal}</PriceItem>
      <PriceItem type="Tax">{tax}</PriceItem>
      <PriceItem type="Total">{total}</PriceItem>
    </dl>
  );
}

function OrderItem({ image, name, price }) {
  return (
    <li className={styles.item}>
      <p className={styles.itemName}>{name}</p>
      <p className={styles.itemPrice}>${price}</p>
      <img
        className={styles.itemImage}
        src={image}
        height="320"
        width="320"
        alt=""
      />
    </li>
  );
}

export default Cart;
