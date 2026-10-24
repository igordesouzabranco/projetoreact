import { Title } from './styled.jsx'
import { Container } from '../../styles/GlobalStyle.jsx'

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
    </Container>
  )
}
