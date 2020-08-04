import React from 'react';
import { useMatch } from '@reach/router';

import * as styles from './Main.module.scss';

function Main({ title, children }) {
  const isHome = useMatch('/');

  React.useEffect(
    function () {
      document.title = `${title} | 6 Savory Scoops`;
    },
    [title]
  );

  return (
    <main id="main" className={styles.wrapper}>
      <h1 className={styles.title}>
        {isHome ? 'Where Ice Cream and Savory Meat' : title}
      </h1>
      {children}
    </main>
  );
}

export default Main;
