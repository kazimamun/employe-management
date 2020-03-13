import React from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="bodyClass">
      <h1 className="header">Employee Management</h1>
      <Details></Details>
      <h1>Developed By: <a href="http://facebook.com/kazi.mamun.716">Kazi Mamun</a></h1>
    </div>
  );
}

export default App;
