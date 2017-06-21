import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterOptions from './FilterOptions';
import { dedupe } from 'common/helpers';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.filters = ['group', 'type', 'employer', 'status'];

    this.state = {
      selectBoxes: [],
      filteredItems: [],
    };

    this.updateActiveFilters = this.updateActiveFilters.bind(this);
  }

  componentDidMount() {
    const selectBoxes = [];

    this.filters.forEach((name) => {
      const opts = this.props.data.map((item) => { return item[name]; });
      opts.unshift('');
      selectBoxes.push({
        label: name,
        options: dedupe(opts),
      });
    });

    this.setState({ selectBoxes });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextState', nextState);
    this.props.onChangeHandler(this.resultsUpdate(nextState));
    return true;
  }

  resultsUpdate(state) {
    let filteredItems = this.props.data;

    this.filters.forEach((filterBy) => {
      const filterValue = state[filterBy];
      if (!!filterValue) {
        filteredItems = filteredItems.filter((item) => {
          return item[filterBy] === filterValue;
        });
      }
    });

    return filteredItems;
  }

  updateActiveFilters(value, name) {
    this.setState({
      [name]: value,
    });
  }

  render() {

    return (
      <section id='filters'>
        <FilterOptions
          data={this.state.selectBoxes}
          changeOption={this.updateActiveFilters} />
      </section>
    );
  }
}

Filters.propTypes = {
  data: PropTypes.array,
  onChangeHandler: PropTypes.func,
};

export default Filters;
