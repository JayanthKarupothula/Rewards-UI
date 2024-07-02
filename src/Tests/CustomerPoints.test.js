import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerPoints from '../CustomerPoints.js';
import * as api from '../api';

jest.mock('../api');

const mockData = [
  { customerId: 1, amount: 120, date: "01-15-2023" },
  { customerId: 1, amount: 75, date: "02-13-2023" },
  { customerId: 1, amount: 200, date: "03-11-2023" }
];

describe('CustomerPoints', () => {
  test('renders loading state initially', () => {
    api.fetchTransactions.mockImplementation(() => new Promise(() => {}));
    render(<CustomerPoints />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders error state', async () => {
   api.fetchTransactions.mockImplementation(() => Promise.reject(new Error('Failed to fetch transactions')));

    render(<CustomerPoints />);
    await waitFor(() => expect(screen.getByText(/Error/i)).toBeInTheDocument());
  });

  test('renders customer points correctly', async () => {
  api.fetchTransactions.mockImplementation(() => {
    console.log('Mock fetchTransactions called');
    return Promise.resolve(mockData);
  });

    render(<CustomerPoints />);
    await waitFor(() => {
      expect(screen.getByText(/Customer 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Month 1: 90 points/i)).toBeInTheDocument();
      expect(screen.getByText(/Month 2: 25 points/i)).toBeInTheDocument();
      expect(screen.getByText(/Month 3: 250 points/i)).toBeInTheDocument();
      expect(screen.getByText(/Total: 365 points/i)).toBeInTheDocument();
    });
  });
});
