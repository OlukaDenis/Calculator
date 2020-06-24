import React from 'react';
import logo from '../logo.svg';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" id="calculatorApp">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
