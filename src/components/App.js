import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.scss';
// import calculator from '../logic/calculate';

export default function App() {
  return (
    <div className="App" id="calculatorApp">
      <Display result="10" />
      <ButtonPanel />
    </div>
  );
}
