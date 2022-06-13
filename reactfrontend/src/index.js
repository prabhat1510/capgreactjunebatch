import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import TutorialComponent  from './component/TutorialComponent';
import AddTutorial from './component/AddTutorialComponent';
import TutorialsList from './component/TutorialListComponent';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <Routes>
    <Route path ="/" element ={<App />} />
    <Route exact path="tutorials" component={TutorialsList} />
    <Route exact path="add" component={AddTutorial} />
    <Route path="tutorials/:id" component={TutorialComponent} />
  </Routes>
  </BrowserRouter> 
);


