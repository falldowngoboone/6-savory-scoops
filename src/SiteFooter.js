import React from 'react';

function SiteFooter({ className }) {
  return (
    <footer className={className}>
      <p>© 2020 Ryan Boone.</p>
      <p>
        Check out{' '}
        <a href="https://www.falldowngoboone.com">my personal website</a> and
        follow <a href="https://twitter.com/therealboone">me on Twitter</a>.
      </p>
    </footer>
  );
}

export default SiteFooter;
