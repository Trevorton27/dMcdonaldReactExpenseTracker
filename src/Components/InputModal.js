import React from 'react';
import bootstrap from 'bootstrap';
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputModal(props) {
  return (
    <div className='modal fade' id='inputModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Create New Expense
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form className='row g-3'>
              <div className='mb-3 selectDate col-md-6'>
                <label for='inputDate' className='form-label'>
                  Date
                </label>
                <input type='date' class='form-control' id='inputDate' />
              </div>
              <div className='mb-3 amountInput col-md-6'>
                <label for='inputAmount' className='form-label'>
                  Amount
                </label>
                <input
                  type='number'
                  min='0.00'
                  max='100000.00'
                  step='any'
                  class='form-control'
                  id='inputAmount'
                />
              </div>
              <div className='mb-3 vendorInput col-md-6'>
                <label for='inputVendor' className='form-label'>
                  Vendor Name
                </label>
                <input type='text' class='form-control' id='inputVendor' />
              </div>
              <div className='mb-3 paymentSelect col-md-6'>
                <label for='paymentType' className='form-label'>
                  Payment Type
                </label>
                <input
                  className='form-control'
                  list='datalistOptions'
                  id='paymentType'
                  placeholder='Click to search...'
                />
                <datalist id='datalistOptions'>
                  <option value='Cash' />
                  <option value='Check' />
                  <option value='Credit' />
                  <option value='Debit' />
                  <option value='Cash App' />
                </datalist>
              </div>
              <div className='mb-3 descriptionInput'>
                <label for='inputDescription' className='form-label'>
                  Description
                </label>
                <input type='text' class='form-control' id='inputDescription' />
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'>
              Cancel
            </button>
            <button type='button' className='btn btn-primary'>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
