import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

export const formatPrice = (price: number | bigint | string): string => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat((Number(price) / 100).toFixed(2)));
  return dollarsAmount;
};
