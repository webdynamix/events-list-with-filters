import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisible: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
    });
  }
  render() {
    return (
      <div>
        <i className='toggleSidebar' onClick={this.toggleSidebar} />
        <Header menu={this.props.headerMenu} currentSection={this.props.currentSection} />
        <Sidebar
          visible={this.state.sidebarVisible}
          menu={this.props.sidebarMenu}
          currentScene={this.props.currentScene} />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  currentScene: PropTypes.string,
  sidebarMenu: PropTypes.array,
  headerMenu: PropTypes.array,
  currentSection: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    currentSection: state.app.currentSection,
    currentScene: state.app.currentScene,
    sidebarMenu: state.app.sidebarMenu,
    headerMenu: state.app.headerMenu,
  };
};

export default connect(
  mapStateToProps,
)(Layout);
