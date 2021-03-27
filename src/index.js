import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

