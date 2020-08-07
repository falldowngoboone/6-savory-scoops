import React from 'react';
import { Link, Redirect } from '@reach/router';

import Button from './Button.js';
import Title from './Title.js';
import { formatCurrency, processPricing } from './utils.js';
import { useOrderContext } from './order.js';

import * as styles from './Checkout.module.scss';

function Checkout() {
  const { orderItems, setOrderItems } = useOrderContext();
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const { total } = processPricing(orderItems);

  if (!success && orderItems.length === 0) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <>
      <Title>Checkout</Title>
      {success ? (
        <>
          <p>Success!</p>
          <Link to="/">Back to home</Link>
        </>
      ) : (
        <form
          className={styles.form}
          onChange={() => {
            setMessage(null);
          }}
          onSubmit={(e) => {
            // setMessage(null);
            const form = e.target;
            const isValid = validateForm(form);

            if (!isValid) {
              setMessage('There are errors!');
            } else {
              setSuccess(true);
              setOrderItems([]);
            }

            e.preventDefault();
          }}
        >
          <p>All fields are required</p>
          <output>{message}</output>
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
      )}
    </>
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

export default Checkout;
