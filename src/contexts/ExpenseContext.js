import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

// const ExpenseProvider = ({ children }) => {
//   const [expenses, setExpense] = useState([
//     { id: 1, title: 'post 1', body: 'Quisque cursus, metus vitae pharetra' },
//     { id: 2, title: 'post 2', body: 'Quisque cursus, metus vitae pharetra' },
//   ]);
//   const saveExpense = expense => {
//     const newExpense = {
//       date: expense.date,
//       amount: expense.amount,
//       vendor: expense.vendor,
//       pay_type: expense.pay_type,
//       description: expense.description,
//     };
//     setExpense([...expenses, newExpense]);
//   };
//   return (
//     <ExpenseContext.Provider value={{ expenses, saveExpense }}>
//       {children}
//     </ExpenseContext.Provider>
//   );
// };

// export default ExpenseProvider;
