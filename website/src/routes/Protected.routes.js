import {Routes, Route, Navigate} from 'react-router-dom'
/* Components */
import { Auth } from '../Context/Auth.context'

import Dashboard from '../Components/User/Dashboard'
import Profile from '../Components/User/Profile'
import AllReviews from '../Components/User/Reviews'
import Listing from '../Components/User/Listing'

const ProtectedRoutes = () => {

  const auth = Auth()

  return (
    <Routes>
      <Route path="/dashboard" exact element={<Dashboard/>} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/my-reviews" exact element={<AllReviews/>} />
      <Route path="/listing" exact element={<Listing/>} />

    </Routes>
  )
}

export default ProtectedRoutes
