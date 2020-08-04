import React from 'react';
import { Link, Match, useMatch } from '@reach/router';

import CartModal from './CartModal';

import * as styles from './Page.module.scss';

// import SiteFooter from './SiteFooter.js';

function Page({ title, children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a className="show-on-focus" href="#main">
          Skip to content
        </a>
        <nav className={styles.siteNav} aria-label="Primary">
          <Link className={styles.homeLink} to="/">
            <img
              src="/images/6ss-logo.png"
              width="400"
              height="347"
              alt="Home"
            />
          </Link>
          <Link to="/flavors">Flavors</Link>
          <Match path="/checkout">
            {({ match }) => (match ? null : <CartModal />)}
          </Match>
        </nav>
      </header>
      <Content title={title}>{children}</Content>
      <footer className={styles.footer}>
        <p>© 2020 Ryan Boone.</p>
        <p>
          <a href="https://www.falldowngoboone.com">Click here</a> to check out
          my personal website and{' '}
          <a href="https://twitter.com/therealboone">click here</a> to follow me
          on Twitter.
        </p>
      </footer>
      {/* <SiteFooter className={styles.footer} /> */}
    </div>
  );
}

function Content({ title, children }) {
  const isHome = useMatch('/');

  React.useEffect(
    function () {
      document.title = `${title} | 6 Savory Scoops`;
    },
    [title]
  );

  return (
    <main id="main" className={styles.main}>
      <h1 className={styles.title}>
        {isHome ? 'Where Ice Cream and Savory Meat' : title}
      </h1>
      {children}
    </main>
  );
}

export default Page;
