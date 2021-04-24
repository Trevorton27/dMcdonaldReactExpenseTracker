import React, { useState } from 'react';
import bootstrap from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonutChart from './Components/Donut';
import ExpTable from './Components/ExpTable';
import InputModal from './Components/InputModal';
import { ExpenseContext } from './contexts/ExpenseContext';

function App() {
  const [newExpense, setNewExpense] = useState({
    date: '',
    amount: '',
    category: '',
    payment: '',
    vendor: '',
    description: '',
  });

  return (
    <div className='App'>
      <h1>React TRKR</h1>
      <section className='overview'>
        <div className='totals'>
          <div className='totals-title'>
            <h2>Expenses Overview</h2>
          </div>
        </div>
        <DonutChart className='chart' />
      </section>
      <ExpenseContext.Provider value={{ newExpense, setNewExpense }}>
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#inputModal'>
          New Expense
        </button>
        <InputModal />
        <ExpTable />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
