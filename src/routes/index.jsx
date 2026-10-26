import { Routes, Route } from 'react-router-dom'

import MyRoute from './MyRoute'
import Login from '../pages/login'
import Page404 from '../pages/Page404'

export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MyRoute>
            <Login />
          </MyRoute>
        }
      />
      <Route
        path="*"
        element={
          <MyRoute>
            <Page404 />
          </MyRoute>
        }
      />
    </Routes>
  )
}
