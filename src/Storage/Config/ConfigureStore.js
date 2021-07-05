import {combineReducers, createStore} from 'redux';
import reducers from '../reducers';

export default function ConfigureStore() {
  return createStore(
    combineReducers({
      ...reducers
    }),
    {},
  );
}