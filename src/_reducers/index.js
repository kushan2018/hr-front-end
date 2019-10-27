import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { vendor } from './vendor.reducer';
import { leave } from './leave.reducer';


const rootReducer = combineReducers({
  authentication,
  vendor,
  leave
});

export default rootReducer;
