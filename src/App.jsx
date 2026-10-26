import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import history from './services/history.jsx'
import Header from './components/header/index.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import Routes from './routes/index.jsx'

export default function App() {
  return (
    <HistoryRouter history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={2500} className="toast-container" />
    </HistoryRouter>
  )
}
