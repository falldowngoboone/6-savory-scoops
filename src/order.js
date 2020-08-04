import React from 'react';

const OrderContext = React.createContext(null);

function useOrderContext() {
  const context = React.useContext(OrderContext);

  if (context === null)
    throw new Error(
      '`useOrderContext` must be called in a child of OrderProvider'
    );

  return context;
}

function OrderProvider({ children }) {
  const [orderItems, setOrderItems] = React.useState([]);

  return (
    <OrderContext.Provider value={{ orderItems, setOrderItems }}>
      {children}
    </OrderContext.Provider>
  );
}

export { useOrderContext, OrderProvider };
