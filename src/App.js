import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DonutChart from './Components/Donut';
import ExpTable from './Components/ExpTable';
import InputModal from './Components/InputModal';
import { ExpenseContext } from './contexts/ExpenseContext';

function App() {
  const [expenses, setExpenses] = useState([]);

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
      <ExpenseContext.Provider value={{ expenses, setExpenses }}>
        <button
          type='button'
          className='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#inputModal'>
          New Expense
        </button>
        <InputModal expenses={expenses} setExpenses={setExpenses} />
        <ExpTable />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
