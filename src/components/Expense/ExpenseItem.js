import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
    
    // [m] s3
    // case1. 컴포넌트 내의 변수를 표현하는 경우
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // return (
    //     <div className="expense-item"></div>
    //         {/* 주의!! React Compoent의 element 클래스 지정은 'className'을 사용함 */}
    //         {/* 주의!! React Compoent의 js 변수값 출력은 '{}'를 사용함*/}
    //         <div>{expenseDate.toISOString()}</div>
    //         <div className='expense-item__description'></div>
    //         <h2>{expenseTitle}</h2>
    //         <div className='expense-item__price'>${expenseAmount}</div>
    //     </div>
    // );


    // case 2. 부모로부터 주어진 값을 표현하는 경우
    // : 최상위 function의 매개변수 props에서 받아옴
    //   이 떄 부모의 attribute로 지정했던 변수명과 동일한 변수명을 사용해야 함.
    // return (
    //     <div className="expense-item">
    //         <div>{props.date.toISOString()}</div>
    //         <div className='expense-item__description'></div>
    //         <h2>{props.title}</h2>
    //         <div className='expense-item__price'>${props.amount}</div>
    //     </div>
    // );


    
    // case 3. 하위컴포넌트 내에서 값을 처리
    // const month = props.date.toLocaleString('en-us', {month: 'long'});
    // const day = props.date.toLocaleString('en-us', {day: '2-digit'});
    // const year = props.date.getFullYear();

    // return (
    //     <div className="expense-item">
    //         <div>
    //             <div>{month}</div>
    //             <div>{day}</div>
    //             <div>{year}</div>
    //         </div>
    //         <div className='expense-item__description'></div>
    //         <h2>{props.title}</h2>
    //         <div className='expense-item__price'>${props.amount}</div>
    //     </div>
    // );

    // case 4. 날짜를 나타내는 부분을 또 하위컴포넌트 화
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'></div>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    );

}

export default ExpenseItem;