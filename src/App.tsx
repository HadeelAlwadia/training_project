import React from 'react';
import './App.css';
import Navbar from './components/header';
import Translation from './components/header/translation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Translation/>
      
    </div>
  );
}

export default App;
