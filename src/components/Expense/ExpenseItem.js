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
    // return (
    //     <div className="expense-item">
    //         <ExpenseDate date={props.date} />
    //         <div className='expense-item__description'></div>
    //         <h2>{props.title}</h2>
    //         <div className='expense-item__price'>${props.amount}</div>
    //     </div>
    // );




    // [m] s4 컴포넌트 이벤트 리스닝

    //case 4-0. XXXX 아래의 코드는 작동X => 이미 렌더링이 끝난 상태이기 때문
    // let title  = props.title;
    // const clickHandler = ()=>{
    //     title = 'Updated!'
    //     console.log(title)
    // }
    // return (
    //     <div className="expense-item">
    //         <ExpenseDate date={props.date} />
    //         <div className='expense-item__description'></div>
    //         <h2>{title}</h2>
    //         <div className='expense-item__price'>${props.amount}</div>
    //         <button onClick={clickHandler}>Change Title</button>
    //     </div>
    // );


    // case 4-1. React의 state 사용
    //  // 주의!!! useState는 컴포넌트의 메소드 안에서 호출되어야, 내장함수에서 호출 X
    //  // 각 컴포넌트 별 독립적으로 데이터를 관리 -> 동일한 종류의 다른 컴포넌트에 영향 X
    // const [title, setTitle] = useState(props.title); // const임! 중요. useState는 title을 재설정하지 않는다. 초깃값을 확인할뿐
    // // useState는 현재 상태값, 상태값을 업데이트 하는 함수를 배열로 반환한다.
    // // let title  = props.title; // Not use
    // const clickHandler = ()=>{
    //     // title = 'Updated!'
    //     setTitle('Updated!')
    //     console.log(title)
    // }
    // return (
    //     <div className="expense-item">
    //         <ExpenseDate date={props.date} />
    //         <div className='expense-item__description'></div>
    //         <h2>{title}</h2>
    //         <div className='expense-item__price'>${props.amount}</div>
    //         <button onClick={clickHandler}>Change Title</button>
    //     </div>
    // );


    // case 4-2. React의 state 사용
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        // title = 'Updated!'
        setTitle('Updated!')
        console.log(title)
    }
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'></div>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;