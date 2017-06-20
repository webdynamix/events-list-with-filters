import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'common/components/Checkbox';

const eventStatus = (status) => {
  const klass = status.toLowerCase() === 'open' ? 'active' : null;

  return <span data-type='badge' className={klass}>{status}</span>;
};

const EventsList = (props) => {
  return (
    <li>
      <Checkbox />
      <div>
        <a className='name' href=''>{props.item.name}</a>
        <div className='company'>{props.item.company}</div>
        <span>{props.item.type} | {props.item.room}</span>
      </div>
      <div>
        {props.item.date},
        {props.item.time}
      </div>
      <div>
        { eventStatus(props.item.status) }
      </div>
      <div>
        {props.item.registrants}
      </div>
    </li>
  );
};

EventsList.propTypes = {
  item: PropTypes.object,
};

export default EventsList;
