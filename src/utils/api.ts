import { Currency } from 'ts/interfaces';

const getCurrencies = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL, {
      method: 'GET',
    });
    const currencies: Currency[] = await response.json();
    return currencies;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export default getCurrencies;
