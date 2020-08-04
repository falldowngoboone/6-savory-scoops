import React from 'react';
import { Link, Redirect } from '@reach/router';

import Page from './Page.js';
import { formatCurrency, processPricing } from './utils.js';
import { useOrderContext } from './order.js';

import * as appStyles from './App.module.scss';

function Checkout() {
  const { orderItems, setOrderItems } = useOrderContext();
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const { total } = processPricing(orderItems);

  if (!success && orderItems.length === 0) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <Page title="Checkout">
      {success ? (
        <>
          <p>Success!</p>
          <Link to="/">Back</Link>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            setMessage(null);
            const form = e.target;
            const isValid = validateForm(form);

            if (!isValid) {
              setMessage(<p>There are errors!</p>);
            } else {
              setSuccess(true);
              setOrderItems([]);
            }

            e.preventDefault();
          }}
        >
          <p>All fields are required</p>
          <output role="alert">{message}</output>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="e" />
          </div>
          <div>
            <label htmlFor="name">Name on card:</label>
            <input autoComplete="off" id="name" name="fn" type="text" />
          </div>
          <div>
            <label htmlFor="cc-number">Card number:</label>
            <input id="cc-number" name="ccn" type="text" />
          </div>
          <div>
            <label htmlFor="exp">
              Expires <span>(MM/YY)</span>:
            </label>
            <input id="exp" name="exp" type="text" />
          </div>
          <button className={appStyles.button}>
            Pay {formatCurrency(total)}
          </button>
        </form>
      )}
    </Page>
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
