import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import ApiService from '../services/api';

function CustomerDetail({ customer, onBack, onCustomerUpdated, onCustomerDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await ApiService.deleteCustomer(customer.id);
      onCustomerDeleted();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCustomerSaved = () => {
    setIsEditing(false);
    onCustomerUpdated();
  };

  if (isEditing) {
    return (
      <CustomerForm
        customer={customer}
        onCustomerSaved={handleCustomerSaved}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Customer Details</h2>
        <button className="btn btn-secondary" onClick={onBack}>
          ← Back to List
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Name:</strong> {customer.name}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong>Email:</strong> {customer.email}
        </div>
        
        {customer.phone && (
          <div style={{ marginBottom: '1rem' }}>
            <strong>Phone:</strong> {customer.phone}
          </div>
        )}
        
        {customer.address && (
          <div style={{ marginBottom: '1rem' }}>
            <strong>Address:</strong> {customer.address}
          </div>
        )}
        
        <div style={{ marginBottom: '1rem' }}>
          <strong>Created:</strong> {new Date(customer.createdAt).toLocaleString()}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong>Last Updated:</strong> {new Date(customer.updatedAt).toLocaleString()}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          className="btn"
          onClick={() => setIsEditing(true)}
          disabled={loading}
        >
          Edit Customer
        </button>
        
        <button 
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete Customer'}
        </button>
      </div>
    </div>
  );
}

export default CustomerDetail;
