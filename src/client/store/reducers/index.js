import { combineReducers } from 'redux'

import customers from './customers';
import addresses from './addresses';

const rootReducer = combineReducers({
  customers,
  addresses
})

export default rootReducer;