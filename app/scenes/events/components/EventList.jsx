import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import EventListHeading from './EventListHeading';

const noResults = () => {
  return (
    <li className='noResults'>No Results</li>
  );
};

const EventsList = (props) => {
  return (
    <ul data-component='eventslist'>
      <EventListHeading />
      { props.list.length === 0 &&
        noResults()
       }
      {props.list.map((item, key) => {
        return <EventItem item={item} key={key} />;
      })}
    </ul>
  );
};

EventsList.propTypes = {
  list: PropTypes.array,
};

export default EventsList;
