import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const ThemeContext = React.createContext()

ReactDOM.render(
  <React.StrictMode >
    <ThemeContext.Provider value={'linear-gradient(rgb(0,0,0), rgb(42,42,42)) no-repeat;'}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
