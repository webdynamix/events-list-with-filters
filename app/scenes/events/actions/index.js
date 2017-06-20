import fetch from 'common/helpers/fetch';

export function titleChange(value) {
  return {
    type: 'TITLE_UPDATED_SUCCESS',
    value,
  };
}
//
export function success(payload) {
  return {
    type: 'DATA_FETCH_SUCCESS',
    payload,
  };
}

export function sendRequest() {
  return {
    type: 'DATA_FETCH_REQUEST',
  };
}

export function failure(response) {
  return {
    type: 'DATA_FETCH_FAILURE',
    value: response,
  };
}

export function fetchEventData() {
  const uri = 'https://raw.githubusercontent.com/webdynamix/events-list-with-filters/master/data/events.json';
  return (dispatch) => {
    dispatch(sendRequest());
    fetch.get(uri).then((response) => {
      if (response.status === 200) {
        dispatch(success(response.payload));
      } else {
        dispatch(failure(response));
      }
    });
  };
}
