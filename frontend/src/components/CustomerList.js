import React, { useState, useEffect } from 'react';
import ApiService from '../services/api';

function CustomerList({ onCustomerSelect, refreshTrigger }) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, [refreshTrigger]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getCustomers();
      setCustomers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading customers...</div>;
  }

  if (error) {
    return (
      <div className="card">
        <div className="error">
          Error loading customers: {error}
        </div>
        <button className="btn" onClick={fetchCustomers}>
          Retry
        </button>
      </div>
    );
  }

  if (customers.length === 0) {
    return (
      <div className="card">
        <h2>No Customers Found</h2>
        <p>No customers have been added yet. Click "Add Customer" to create your first customer.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Customer List ({customers.length})</h2>
      <div className="customer-list">
        {customers.map((customer) => (
          <div key={customer.id} className="customer-item">
            <div className="customer-info">
              <h3>{customer.name}</h3>
              <p><strong>Email:</strong> {customer.email}</p>
              {customer.phone && <p><strong>Phone:</strong> {customer.phone}</p>}
              {customer.address && <p><strong>Address:</strong> {customer.address}</p>}
              <p><strong>Created:</strong> {new Date(customer.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="customer-actions">
              <button 
                className="btn"
                onClick={() => onCustomerSelect(customer)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerList;
