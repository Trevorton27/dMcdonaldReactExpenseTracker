import React from 'react';
import './ExpTable.css';

function ExpTable() {
  return (
    <table className='table .table-responsive table-sm table-borderless table-dark table-hover table-striped '>
      <thead className='.thead-dark '>
        <tr>
          <th class='table-header'>Date</th>
          <th class='table-header'>Amount</th>
          <th class='table-header'>Vendor</th>
          <th class='table-header'>Payment</th>
          <th class='table-header'>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11/20/20</td>
          <td>$100.19</td>
          <td>Le Circ</td>
          <td>Debit Card</td>
          <td>Lunch Meeting</td>
        </tr>
        <tr>
          <td>02/12/21</td>
          <td>$10.99</td>
          <td>Whole Foods</td>
          <td>Cash</td>
          <td>Onions: Dinner</td>
        </tr>
      </tbody>
      <template className='template' id='rowTemplate'>
        <tr>
          <td className='lineItem' id='dateTemp' contenteditable='true'></td>
          <td className='lineItem' id='nameTemp' contenteditable='true'></td>
          <td className='lineItem' id='vendorTemp' contenteditable='true'></td>
          <td className='lineItem' id='typeTemp' contenteditable='true'></td>
          <td className='lineItem' id='amountTemp' contenteditable='true'></td>
          <td
            className='lineItem'
            id='descriptionTemp'
            contenteditable='true'></td>
          <td className='delete'>
            <img
              src='images/flame.svg'
              alt='delte button'
              className='deleteImg'
            />
          </td>
        </tr>
      </template>
    </table>
  );
}

export default ExpTable;
