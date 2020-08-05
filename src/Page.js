import React from 'react';
import { Link, Match } from '@reach/router';
import { Router } from '@reach/router';

import Flavors from './Flavors.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import CartModal from './CartModal';

import * as styles from './Page.module.scss';

// import SiteFooter from './SiteFooter.js';

function Page({ children }) {
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
      <main id="main" className={styles.main}>
        <Router>
          <Home path="/" />
          <Checkout path="checkout" />
          <Flavors path="flavors" />
        </Router>
      </main>
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

export default Page;
