// import './app.css'

import Header from './components/header/index.jsx'
import Login from './pages/login/index.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Login />
    </>
  )
}
