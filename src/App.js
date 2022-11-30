import React from 'react';
import Header from './components/header/Header'
import Balance from './components/balance/Balance'
import Income from './components/income/Income'
import TransactionList from './components/transaction/TransactionList'
import AddTransaction from './components/transaction/AddTransaction'

import { GlobalProvider  } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
 