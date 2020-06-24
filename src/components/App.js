import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" id="calculatorApp">
        <Display result={'10'} />
        <ButtonPanel />
      </div>
    );
  }
}
