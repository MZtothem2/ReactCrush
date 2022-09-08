import React, { useState } from 'react';
import ExpenseDate from '../Expense/ExpenseDate';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //각각의 state 설정 외 다른 방법
  // const [userInput, serUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // }); 
  // const titleChangeHandler = (event) => {
  //   serUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value
  //   })

  // 위 방식은 다른 state에서 변경된 다른 값들을 제대로 가져오지 못하는 경우 발생 가능.
  // state 관련 함수 실행 시 직전의 값들을 매개변수로 가져 와 활용
  // * 이전 state에 의존하는 데이터 처리
  // setUserInput( (prevState)=>{
  //   return {...prevState, enteredTitle: event.target.value}
  // } )
  // };


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault(); // 기본요청 송신 방지 => 페이지가 로드된 페이지에서 그대로 유지

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData);
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button> 
        {/* => submit 버튼에 대한 반응은 상단 <form> 태그에 걸려있음 */}
        <button type='button' onClick={props.onCancel}>Cancel</button>
        {/* => 일반 button에 대한 반응은 onClick으로 */}
      </div>
    </form>
  );
};

export default ExpenseForm;