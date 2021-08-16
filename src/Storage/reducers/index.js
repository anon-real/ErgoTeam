import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Settings from './Settings';
import Data from './Data';

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    data: Data,
  });
