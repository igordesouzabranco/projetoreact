import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'
import history from './services/history.jsx'
import Header from './components/header/index.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import Routes from './routes/index.jsx'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HistoryRouter history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={2500} className="toast-container" />
        </HistoryRouter>
      </PersistGate>
    </Provider>
  )
}
