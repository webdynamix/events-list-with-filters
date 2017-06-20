import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import EventList from './components/EventList';
import Filters from './components/Filters';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchEventData();
  }

  onFilterChange(events) {
    if (JSON.stringify(events) !== JSON.stringify(this.state.events)) {
      this.setState({ events });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Filters data={this.props.eventsData} onChangeHandler={this.onFilterChange} />
        <EventList list={this.state.events} />
      </div>
    );
  }
}

Main.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.object,
  eventsData: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    title: state.events.title,
    eventsData: state.events.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
