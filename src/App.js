import React from 'react';

import { OrderProvider } from './order.js';
import Page from './Page.js';

function App() {
  return (
    <OrderProvider>
      <Page />
    </OrderProvider>
  );
}

export default App;
