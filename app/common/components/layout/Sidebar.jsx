import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  return (
    <aside data-component='sidebar' data-visible={props.visible}>
      <nav>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
        </ul>
        <ul>
          { props.menu.map((item, k) => {
            return (
              <li key={k} className={props.currentScene === item ? 'active' : null}>
                <a href=''>{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  currentScene: PropTypes.string,
  menu: PropTypes.array,
  visible: PropTypes.bool,
};

export default Sidebar;
