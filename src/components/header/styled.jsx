import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../config/colors.jsx'

export const Nav = styled.nav`
  background-color: ${PRIMARY_COLOR};
  color: #000000;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #000000;
    text-decoration: none;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`
