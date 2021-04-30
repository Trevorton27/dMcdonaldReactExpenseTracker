import React from 'react';
import ExpenseRow from './ExpenseRow';
import './ExpTable.css';

function ExpTable() {
  return (
    <table
      className='table .table-responsive table-sm table-borderless table-dark table-hover table-striped '
      // contentEditable='true'
    >
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
        <ExpenseRow />
      </tbody>
    </table>
  );
}

export default ExpTable;
