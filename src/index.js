import React from 'react'; //package.json의 react, react-dom에서 부터 
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App'; // .js는 확장자 생략
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // ./public/index.html의 최상위 element
root.render(
  // 첫번째 컴포넌트 사용
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
