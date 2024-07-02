export const fetchTransactions = async () => {
    try {
      const response = await fetch('https://6682e2164102471fa4c88fcb.mockapi.io/all/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch transactions');
    }
  };