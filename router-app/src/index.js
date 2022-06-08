import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bookkeeper from './components/Bookkeeper';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    <Routes>
      <Route path ="/" element ={<Bookkeeper />} />
      <Route path ="expenses" element={<Expenses />} />
      <Route path ="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
  
);


