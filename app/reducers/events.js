
const initialState = {
  title: 'Events',
  fetchedData: {},
};

export default function app(state = initialState, action = {}) {
  let response;

  switch (action.type) {
    case 'DATA_FETCH_SUCCESS':
      response = Object.assign({}, state, {
        fetchedData: action.payload,
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
