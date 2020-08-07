import React from 'react';
import { Link, Match, useLocation } from '@reach/router';

import Flavors from './Flavors.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import CartModal from './CartModal';

import * as styles from './Page.module.scss';

import SiteFooter from './SiteFooter.js';
import FadeTransitionRouter from './FadeTransitionRouter.js';

function Page() {
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
          <Link className={styles.siteNavLink} to="/flavors">
            Flavors
          </Link>
          <Match path="/checkout">
            {({ match }) => (match ? null : <CartModal />)}
          </Match>
        </nav>
      </header>
      <FadeTransitionRouter component={Main}>
        <Home path="/" />
        <Checkout path="checkout" />
        <Flavors path="flavors" />
      </FadeTransitionRouter>
      {/* <footer className={styles.footer}>
        <p>© 2020 Ryan Boone.</p>
        <p>
          <a href="https://www.falldowngoboone.com">Click here</a> to check out
          my personal website and{' '}
          <a href="https://twitter.com/therealboone">click here</a> to follow me
          on Twitter.
        </p>
      </footer> */}
      <SiteFooter className={styles.footer} />
    </div>
  );
}

const Main = React.forwardRef(({ children, ...props }, ref) => {
  const location = useLocation();
  const classes = [location.pathname.substring(1), styles.main]
    .filter(Boolean)
    .join(' ');
  return (
    <main id="main" className={classes} ref={ref} {...props}>
      <div className={styles.mainInner}>{children}</div>
    </main>
  );
});

export default Page;
