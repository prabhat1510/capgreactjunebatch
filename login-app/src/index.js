import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import App from './App';
import LoginForm from './components/LoginForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  
  <Routes>
      <Route path ="/" element ={<App />} />
      <Route path ="login" element={<LoginForm />} />
    </Routes>
 </BrowserRouter>
);

