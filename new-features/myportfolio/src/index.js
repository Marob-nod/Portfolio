import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


// export const themes = {
//   principal: {
//     background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
//   },
//   lbf: {
//     background: 'linear-gradient(to top, rgb(178 31 31) 0%, rgba(178, 31, 31, 1) 0%, rgba(253, 187, 45, 0.5))',
//   },
//   gsoc: {
//     background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
//   },
//   rahan: {
//     background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
//   },
//   cookbook: {
//     background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
//   },
//   searchPage: {
//     background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
//   },
//   ucla: {
//     background: 'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;',
//   },

// };

ReactDOM.render(
  <React.StrictMode >

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
