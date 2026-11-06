import { persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import persistedReducers from './modules/reduxPersist.jsx'

import rootReducer from './modules/rootReducer.jsx'
import rootSaga from './modules/rootSaga.jsx'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: persistedReducers(rootReducer),
  middleware: (getDefault) => getDefault().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
export const persistor = persistStore(store)
