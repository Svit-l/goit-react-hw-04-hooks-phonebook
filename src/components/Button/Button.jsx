import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ label, onClick = () => null, type = 'button' }) {
  return (
    <button className={(s.button, s.contactBtn)} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
