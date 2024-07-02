import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./api";
import { calculatePoints } from "./utils";

const CustomerPoints = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pointsByCustomer = transactions.reduce((acc, transaction) => {
    const { customerId, amount, date } = transaction;
    const points = calculatePoints(amount);
    const month = new Date(date).getMonth() + 1;

    if (!acc[customerId]) acc[customerId] = {};
    if (!acc[customerId][month]) acc[customerId][month] = 0;

    acc[customerId][month] += points;
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(pointsByCustomer).map(customerId => (
        <div key={customerId}>
          <h3>Customer {customerId}</h3>
          {Object.keys(pointsByCustomer[customerId]).map(month => (
            <div key={month}>
              Month {month}: {pointsByCustomer[customerId][month]} points
            </div>
          ))}
          Total: {Object.values(pointsByCustomer[customerId]).reduce((a, b) => a + b, 0)} points
        </div>
      ))}
    </div>
  );
};

export default CustomerPoints;