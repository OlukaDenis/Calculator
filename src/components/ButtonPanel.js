import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.scss';

export default class ButtonPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
       <Button />
      </div>
    )
  }
}