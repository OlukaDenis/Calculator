import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.scss';

export default function Button(props) {

  return(
    <button className="buttonSquare">
      {props.name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};