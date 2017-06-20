/*
  todo:
    *implement router with redux.
    *fetch and dispatch sidebarMenu - shold be a collection of data objects
    *assign currentScene using id key
    *setup action types
*/
const initialState = {
  currentSection: '1',
  currentScene: 'Events',
  headerMenu: [{
    id: '1',
    name: 'dashboard',
    icon: 'bulb',
  }, {
    id: '2',
    name: 'bugs',
    icon: 'bug',
  }, {
    id: '3',
    name: 'settings',
    icon: 'cog',
  }],
  sidebarMenu: [
    'Research Tools',
    'OCI and Job Listings',
    'Appointments',
    'Events',
    'Candidate Search',
    'Resume Books',
  ],
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
