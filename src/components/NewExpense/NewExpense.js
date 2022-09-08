import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const startEdittingHandler = () => {
    setIsEditing(true);
  };

  const stopEdittingHandler = () => {
    setIsEditing(false);
  };


  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEdittingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdittingHandler}/>}
    </div>
  );
};

export default NewExpense;