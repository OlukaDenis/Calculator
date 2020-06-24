import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.scss';

export default class Display extends Component {

  render() {
    return(
      <div className="displayContainer">
        {this.props.result}
      </div>
    )
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaulProps = {
  result: '0',
};