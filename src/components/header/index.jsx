import { FaUser, FaUserPlus, FaSignInAlt } from 'react-icons/fa'

import { Nav } from './styled.jsx'

export default function Header() {
  return (
    <Nav>
      <a href="/">
        <FaSignInAlt size={24} />
      </a>
      <a href="/register">
        <FaUserPlus size={24} />
      </a>
      <a href="/profile">
        <FaUser size={24} />
      </a>
    </Nav>
  )
}
