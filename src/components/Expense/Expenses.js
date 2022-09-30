import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log(`Expenses.js got selected Year`, selectedYear);
    setFilteredYear(selectedYear);
  };

  // dropbox의 내용을 표시하기위해 렌더링 용 데이터를 따로 설정한다.
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    // <li> list형태임을 일관성있게 표현
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeHandler={filterChangeHandler} />
          {/* [m] s5. 조건부 렌더링 */}
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    // </li>
  );
}

export default Expenses;