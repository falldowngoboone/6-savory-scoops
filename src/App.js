import React from 'react';
import { Router } from '@reach/router';

import Flavors from './Flavors.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { OrderProvider } from './order.js';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Checkout path="/checkout" />
        <Flavors path="/flavors" />
        <Home path="/" />
      </Router>
    </OrderProvider>
  );
}

export default App;
