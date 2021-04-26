import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import './ExpTable.css';

function ExpTable() {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  let lastID = 0;

  return (
    <table className='table .table-responsive table-sm table-borderless table-dark table-hover table-striped '>
      <thead className='.thead-dark '>
        <tr>
          <th className='table-header'>Date</th>
          <th className='table-header'>Amount</th>
          <th className='table-header'>Payment</th>
          <th className='table-header'>Category</th>
          <th className='table-header'>Vendor</th>
          <th className='table-header'>Description</th>
          <th className='table-header'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={lastID}>
            <td>{expense.date}</td>
            <td>${expense.amount}</td>
            <td>{expense.payment}</td>
            <td>{expense.category}</td>
            <td>{expense.vendor}</td>
            <td>{expense.description}</td>
            <td>
              {React.createElement(
                'button',
                {
                  id: lastID++,
                  onClick: e => {
                    expenses.splice(e.target.id, 1);
                    setExpenses(expenses => [...expenses]);
                  },
                },
                'delete'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpTable;
