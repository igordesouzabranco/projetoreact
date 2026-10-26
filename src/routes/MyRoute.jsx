import { Navigate, useLocation } from 'react-router-dom'

export default function MyRoute({ children, isClosed = false }) {
  const location = useLocation()
  const isLoggedIn = false

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
    )
  }

  return children
}
