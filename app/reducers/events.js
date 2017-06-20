
const initialState = {
  title: 'Events',
  data: [],
};

export default function app(state = initialState, action = {}) {
  let response;
  switch (action.type) {
    case 'DATA_FETCH_SUCCESS':
      response = Object.assign({}, state, {
        data: action.payload,
      });
      return response;
    default:
      return state;
  }
}
