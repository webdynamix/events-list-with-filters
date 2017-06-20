/* eslint class-methods-use-this: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterOptions extends Component {

  constructor(props) {
    super(props);

    this.changeOption = this.changeOption.bind(this);
  }

  changeOption(label, e) {
    const value = e.target.value;
    this.props.changeOption(value, label);
  }

  selectOptions(item) {
    const options = item.options.map((option, key) => {
      return (
        <option key={key} value={option}>{option === '' ? 'All' : option}</option>
      );
    });

    return options;
  }

  selectBoxes() {
    const items = this.props.data.map((item, key) => {
      return (
        <li key={key}>
          <label>{item.label}</label>
          <select placeholder='place' onChange={(e) => { this.changeOption(item.label, e); }}>
            {this.selectOptions(item)}
          </select>
          <i />
        </li>
      );
    });
    return items;
  }

  render() {

    return (
      <ul>
        { this.selectBoxes() }
        <li>
          <a href='' className='clear'>Clear</a>
        </li>
        <li>
          <a href=''>Advanced</a>
        </li>
      </ul>
    );
  }
}

FilterOptions.propTypes = {
  changeOption: PropTypes.func,
  data: PropTypes.array,
};

export default FilterOptions;
