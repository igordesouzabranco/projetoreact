import { Title } from './styled.jsx'
import { Container } from '../../styles/GlobalStyle.jsx'

import { useDispatch } from 'react-redux'

export default function Login() {
  const dispatch = useDispatch()
  function handleClick(e) {
    e.preventDefault()
    dispatch({
      type: 'CLICKED_BUTTON',
    })
  }

  return (
    <Container>
      <Title>Login</Title>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="button" onClick={handleClick}>
          Login
        </button>
      </form>
    </Container>
  )
}
