import { FaUser, FaUserPlus, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Nav } from './styled.jsx'

export default function Header() {
  const clickedButton = useSelector(state => state.clickedButton)
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserPlus size={24} />
      </Link>
      <Link to="/profile">
        <FaUser size={24} />
      </Link>
      {clickedButton ? 'Clicked' : 'Not Clicked'}
    </Nav>
  )
}
