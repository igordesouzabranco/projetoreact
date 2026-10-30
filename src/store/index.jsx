import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './modules/rootReducer.jsx'

const store = configureStore({
  rootReducer,
})

export default store
