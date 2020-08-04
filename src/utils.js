import { useEffect } from 'react';

function formatCurrency(number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(number);
}

function processPricing(orderItems) {
  const subtotal = orderItems.reduce((acc, { price }) => acc + price, 0);
  const tax = subtotal * 0.0825;

  return {
    subtotal,
    tax,
    total: subtotal + tax,
  };
}

function usePageTitle(title) {
  const siteName = '6 Savory Scoops';

  useEffect(
    function () {
      document.title = title ? `${title} | ${siteName}` : siteName;
    },
    [title]
  );
}

export { formatCurrency, processPricing, usePageTitle };
