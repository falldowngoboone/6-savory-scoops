import React from 'react';
import { navigate } from '@reach/router';

import Button from './Button.js';
import Input from './Input.js';
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
        <div role="alert" class={styles.error}>
          {message}
        </div>
        <Input label="Email:" id="email" name="email" />
        <Input label="Name on card:" id="name" name="full-name" />
        <Input label="Card number:" id="cc-number" name="ccn" />
        <Input
          label={
            <>
              Expires <span>(MM/YY)</span>:
            </>
          }
          id="exp"
          name="exp"
        />
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
