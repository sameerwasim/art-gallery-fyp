import {Routes, Route, Navigate} from 'react-router-dom'
/* Components */
import { Auth } from '../Context/Auth.context'

import Dashboard from '../Components/User/Dashboard'
import Profile from '../Components/User/Profile'
import AddReview from '../Components/User/AddReviews'

const ProtectedRoutes = () => {

  const auth = Auth()

  return (
    <Routes>
      <Route path="/dashboard" exact element={<Dashboard/>} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/addreview" exact element={<AddReview/>} />

    </Routes>
  )
}

export default ProtectedRoutes
