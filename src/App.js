import React, { useState, useEffect } from 'react';
import './BoostrapReset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonutChart from './Components/Donut';
import ExpTable from './Components/ExpTable';
import InputModal from './Components/InputModal';
import { ExpenseContext } from './contexts/ExpenseContext';

function App() {
  const [expenses, setExpenses] = useState([
    {
      date: 'Never',
      amount: 0.01,
      payment: 'EXAMPLE',
      category: 'EXAMPLE',
      vendor: 'Duane',
      description: 'DELETE ME'
    }
  ]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className='align-items-center App'>
      <ExpenseContext.Provider value={{ expenses, setExpenses }}>
        <h1>React TRKR</h1>
        <DonutChart className='chart' />
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#inputModal'
        >
          New Expense
        </button>
        <InputModal />
        <ExpTable />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
