import React from 'react';

import * as styles from './Checkout.module.scss';

function Checkout({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Checkout;
