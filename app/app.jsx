import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Layout from 'common/components/layout';
import reducers from './reducers';
import Events from './scenes/events';

const nextRootReducer = require('./reducers').default;

try {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(reducers);

  store.replaceReducer(nextRootReducer);

  const throttle = setInterval(() => {
    if (!!store) {
      clearInterval(throttle);
      ReactDOM.render(
        <Provider store={store}>
          <Layout>
            <Events />
          </Layout>
        </Provider>,
        document.getElementById('app'),
      );
    }
  }, 50);

} catch (error) {
  throw new Error(error);
}
