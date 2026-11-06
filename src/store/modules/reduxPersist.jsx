import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

function persistReducers(reducers) {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-APP',
      storage,
      whitelist: ['example'],
    },
    reducers
  )

  return persistedReducers
}

export default persistReducers
