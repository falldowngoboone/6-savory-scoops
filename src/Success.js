import React from 'react';
import { Link } from '@reach/router';

import Title from './Title.js';

import * as styles from './Checkout.module.scss';

function Success() {
  return (
    <div className={styles.wrapper}>
      <Title>Success!</Title>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}

export default Success;
