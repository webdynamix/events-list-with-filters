import { combineReducers } from 'redux';

import app from './app';
import events from './events';

const reducers = combineReducers({
  app,
  events,
});

export default reducers;
