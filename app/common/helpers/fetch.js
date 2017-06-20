import fetch from 'isomorphic-fetch';

class GetFetch {

  get(uri) {
    return (
      fetch(uri, {
        method: 'GET',
      }).then((response) => {
        let data;
        switch (response.status) {
          case 200:
            data = response.json();
            break;
          default:
            throw new Error('Throw error');
        }
        return data;
      }).then((data) => {
        return {
          status: 200,
          payload: data,
        };
      }).catch(() => {
        return {
          status: 406,
          statusText: 'Something went wrong'
        };
      })
    );
  }

}

export default new GetFetch();
