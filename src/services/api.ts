import axios from 'axios';

const BASE_URL = 'https://payment.radr.in';

export const getCustomerDetails = async () => {
  const response = await axios.get(`${BASE_URL}/customers`);
  return response.data;
};

export const getPaymentHistory = async (accountNumber: string) => {
  const response = await axios.get(`${BASE_URL}/payments/${accountNumber}`);
  return response.data;
};