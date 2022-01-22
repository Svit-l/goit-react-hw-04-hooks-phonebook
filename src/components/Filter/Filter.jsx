import React from 'react';
import PropTypes from 'prop-types';
import s from '../App/App.module.css';

function Filter({ value, event }) {
  return (
    <label className={s.inputLable}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={event}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default Filter;
