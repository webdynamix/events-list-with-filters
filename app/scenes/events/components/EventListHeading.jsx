import React from 'react';
import Checkbox from 'common/components/Checkbox';

const EventListHeading = () => {
  const columns = ['Name', 'Date', 'Status', 'Registrants'];

  return (
    <li data-type='tableheading'>
      <Checkbox />
      {columns.map((name, key) => {
        return <div key={key}>{name}</div>;
      })}
    </li>
  );
};

export default EventListHeading;
