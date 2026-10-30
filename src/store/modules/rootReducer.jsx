import { combineReducers } from 'redux'

import exampleReducer from './example/reducer.jsx'

export default combineReducers({
  example: exampleReducer,
})
