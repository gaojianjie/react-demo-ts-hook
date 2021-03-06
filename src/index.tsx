import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/home/App';
import Root from './router/Root'
import reportWebVitals from './reportWebVitals';
import router from './router/router'
import { BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Root route={ router } />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
