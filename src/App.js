// import './App.css';
// import './components/Expense/ExpenseItem.css';
// import ExpenseItem from './components/Expense/ExpenseItem';
// import NewExpense from './components/NewExpense/NewExpense';

import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = ()=> {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  // [m] s4 자식->부모 상향식 통신
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  let isOnForm = false;
  
  const clickFromButton = () =>{
    
    isOnForm = !isOnForm;
    if(isOnForm) addFormContent = <NewExpense onAddExpense={addExpenseHandler} />
  }

  let addFormContent = <button onClick={clickFromButton}>show</button>



  // [m] s2. 사용자가 커스텀한 컴포넌트가 표시되는 최상위 컴포넌트
  // return (
  //   <div>
  //     <NewExpense />
  //     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
  //     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
  //     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
  //  </div>
  // );

  // [m] s3
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
