import {Routes, Route, Navigate} from 'react-router-dom'
/* Components */
import { Auth } from '../Context/Auth.context'

const ProtectedRoutes = () => {

  const auth = Auth()

  return (
    <Routes>
      {auth.isAuthenticated ? (
        <Route path="/dashboard" exact element={<></>} />
      ) : (
        <Route path="/dashboard" exact element={<Navigate to="/sign-in"/>} />
      )}
    </Routes>
  )
}

export default ProtectedRoutes
