import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  return (
    <div data-component='checkbox'>
      <input name={props.name} type='checkbox' />
      <label>{props.label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Checkbox;
