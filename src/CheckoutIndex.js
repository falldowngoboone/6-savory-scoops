import React from 'react';
import { navigate } from '@reach/router';

import Button from './Button.js';
import Title from './Title.js';
import { formatCurrency, processPricing } from './utils.js';
import { useOrderContext } from './order.js';

import * as styles from './Checkout.module.scss';

function CheckoutIndex() {
  const { orderItems, setOrderItems } = useOrderContext();
  const { total } = processPricing(orderItems);
  const [message, setMessage] = React.useState(null);
  return (
    <div className={styles.wrapper}>
      <Title>Checkout</Title>
      <form
        className={styles.form}
        onChange={() => {
          setMessage(null);
        }}
        onSubmit={(e) => {
          const form = e.target;
          const isValid = validateForm(form);

          if (!isValid) {
            setMessage('There are errors!');
          } else {
            setOrderItems([]);
            navigate('/checkout/success');
          }

          e.preventDefault();
        }}
      >
        <p>All fields are required</p>
        <output class={styles.error}>{message}</output>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input className={styles.input} id="email" name="e" />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="name">
            Name on card:
          </label>
          <input
            className={styles.input}
            autoComplete="off"
            id="name"
            name="fn"
            type="text"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="cc-number">
            Card number:
          </label>
          <input
            className={styles.input}
            id="cc-number"
            name="ccn"
            type="text"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="exp">
            Expires <span>(MM/YY)</span>:
          </label>
          <input className={styles.input} id="exp" name="exp" type="text" />
        </div>
        <Button>Pay {formatCurrency(total)}</Button>
      </form>
    </div>
  );
}

function validateForm(form) {
  let isValid = true;
  for (let el of form.elements) {
    if ('input' === el.nodeName.toLowerCase() && !el.value) {
      isValid = false;
    }
  }
  return isValid;
}

export default CheckoutIndex;
