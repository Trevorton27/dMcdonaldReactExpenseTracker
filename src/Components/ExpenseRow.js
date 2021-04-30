import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

function ExpenseRow() {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  function deleteRow(id) {
    const targetRowRemoved = expenses.filter(
      (expenseRow) => expenseRow.id !== id
    );

    setExpenses(targetRowRemoved);
  }
  return expenses.map((expense) => (
    <tr key={expense.id}>
      <td>{expense.date}</td>
      <td>${expense.amount}</td>
      <td>{expense.payment}</td>
      <td>{expense.category}</td>
      <td>{expense.vendor}</td>
      <td>{expense.description}</td>
      <td>
        <button className='deleteBtn' onClick={() => deleteRow(expense.id)}>
          'X'
        </button>
      </td>
    </tr>
  ));
}

export default ExpenseRow;
