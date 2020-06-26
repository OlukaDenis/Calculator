import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.scss';

export default class Display extends React.Component {

  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="displayContainer">
        {operation ? next : total}
      </div>
    );
  }
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
