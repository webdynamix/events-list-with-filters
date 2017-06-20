import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <nav>
        { props.menu.map((item, k) => {
          return (
            <button key={k} className={props.currentSection === item.id ? 'active' : null}>
              <i className={item.icon} />
            </button>
          );
        })}
        <i />
      </nav>
      <h2>Career Management System (CMS)</h2>
    </header>
  );
};

Header.propTypes = {
  menu: PropTypes.array,
  currentSection: PropTypes.string,
};

export default Header;
