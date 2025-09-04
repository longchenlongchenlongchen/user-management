import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import CustomerDetail from './components/CustomerDetail';

function App() {
  const [currentView, setCurrentView] = useState('list');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view !== 'detail') {
      setSelectedCustomer(null);
    }
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setCurrentView('detail');
  };

  const handleCustomerSaved = () => {
    setRefreshTrigger(prev => prev + 1);
    setCurrentView('list');
  };

  const handleCustomerUpdated = () => {
    setRefreshTrigger(prev => prev + 1);
    setCurrentView('list');
  };

  const handleCustomerDeleted = () => {
    setRefreshTrigger(prev => prev + 1);
    setCurrentView('list');
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Customer Management System</h1>
          <nav className="nav">
            <button 
              className={currentView === 'list' ? 'active' : ''}
              onClick={() => handleViewChange('list')}
            >
              Customer List
            </button>
            <button 
              className={currentView === 'add' ? 'active' : ''}
              onClick={() => handleViewChange('add')}
            >
              Add Customer
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        {currentView === 'list' && (
          <CustomerList 
            onCustomerSelect={handleCustomerSelect}
            refreshTrigger={refreshTrigger}
          />
        )}
        
        {currentView === 'add' && (
          <CustomerForm 
            onCustomerSaved={handleCustomerSaved}
            onCancel={() => handleViewChange('list')}
          />
        )}
        
        {currentView === 'detail' && selectedCustomer && (
          <CustomerDetail 
            customer={selectedCustomer}
            onBack={() => handleViewChange('list')}
            onCustomerUpdated={handleCustomerUpdated}
            onCustomerDeleted={handleCustomerDeleted}
          />
        )}
      </main>
    </div>
  );
}

export default App;
