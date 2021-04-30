import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputModal() {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState(0);
  const [vendor, setVendor] = useState('');
  const [payment, setPayment] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  function checkThenSubmit(e) {
    e.preventDefault();
    return isEmptyInputs()
      ? alert('Please fill out all fields before submitting.')
      : handleSubmit();
  }
  function handleSubmit() {
    const newExpense = {
      id: Date.now(),
      date,
      amount: formatAmount(amount),
      vendor,
      payment,
      description,
      category
    };

    setExpenses([...expenses, newExpense]);
    clearForm();
  }

  function clearForm() {
    setDate('');
    setAmount('');
    setVendor('');
    setPayment('');
    setDescription('');
    setCategory('');
  }

  function formatAmount(amount) {
    return (amount = parseFloat(amount).toFixed(2));
  }

  function isEmptyInputs() {
    const emptyInput =
      !date || !amount || !vendor || !payment || !description || !category;
    return emptyInput ? true : false;
  }

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
              aria-label='Close'
            ></button>
          </div>
          <form onSubmit={checkThenSubmit}>
            <div className='modal-body'>
              <div className='row g-3'>
                <div className='mb-3 selectDate col-md-6'>
                  <label htmlFor='inputDate' className='form-label'>
                    Date
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='inputDate'
                    value={date}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                  />
                </div>
                <div className='mb-3 amountInput col-md-6'>
                  <label htmlFor='inputAmount' className='form-label'>
                    Amount
                  </label>
                  <input
                    type='number'
                    min='0.00'
                    max='100000.00'
                    step='any'
                    className='form-control'
                    id='inputAmount'
                    placeholder={0.0}
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                  />
                </div>
                <div className='mb-3 paymentSelect col-md-6'>
                  <label htmlFor='paymentType' className='form-label'>
                    Payment Type
                  </label>
                  <input
                    className='form-control'
                    list='paymentOptions'
                    id='paymentType'
                    placeholder='Click to search...'
                    value={payment}
                    onChange={(event) => setPayment(event.target.value)}
                  />
                  <datalist id='paymentOptions'>
                    <option value='Cash' />
                    <option value='Check' />
                    <option value='Credit' />
                    <option value='Debit' />
                    <option value='Cash App' />
                  </datalist>
                </div>
                <div className='mb-3 categorySelect col-md-6'>
                  <label htmlFor='categorySelect' className='form-label'>
                    Category
                  </label>
                  <input
                    className='form-control'
                    list='categoryOptions'
                    id='categorySelect'
                    placeholder='Click to search...'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  />
                  <datalist id='categoryOptions'>
                    <option value='Meals' />
                    <option value='Travel' />
                    <option value='Personal' />
                    <option value='Supplies' />
                    <option value='Entertainment' />
                  </datalist>
                </div>
                <div className='mb-3 vendorInput col-md-6'>
                  <label htmlFor='inputVendor' className='form-label'>
                    Vendor Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputVendor'
                    placeholder='place of purchase'
                    value={vendor}
                    onChange={(event) => setVendor(event.target.value)}
                  />
                </div>

                <div className='mb-3 descriptionInput col-md-6'>
                  <label htmlFor='inputDescription' className='form-label'>
                    Description
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputDescription'
                    placeholder='reason for purchase'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#inputModal'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
