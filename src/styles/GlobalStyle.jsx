import styled, { createGlobalStyle } from 'styled-components'
import * as colors from '../config/colors.jsx'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.PRIMARY_DARK_COLOR};
    font-family: 'bree sans pro', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${colors.PRIMARY_DARK_COLOR};
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: ${colors.PRIMARY_DARK_COLOR};
  }

  ul, ol {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.SUCCESS_COLOR};
    color: aliceblue;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.WARNING_COLOR};
    color: aliceblue;
  }
`

export const Container = styled.section`
  max-width: 360px;
  background: ${colors.PRIMARY_COLOR};
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
