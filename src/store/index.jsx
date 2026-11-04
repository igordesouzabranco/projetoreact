import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer.jsx'
import rootSaga from './modules/rootSaga.jsx'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
