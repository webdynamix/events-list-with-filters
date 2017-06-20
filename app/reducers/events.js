
const initialState = {
  title: 'Events',
  eventsData: [],
};

export default function app(state = initialState, action = {}) {
  let response;
  console.log('action', action);
  switch (action.type) {
    case 'DATA_FETCH_SUCCESS':
      response = Object.assign({}, state, {
        eventsData: action.payload,
      });
      return response;
    case 'TITLE_UPDATED_SUCCESS':
      response = Object.assign({}, state, {
        title: action.value,
      });
      return response;
    default:
      return state;
  }
}
