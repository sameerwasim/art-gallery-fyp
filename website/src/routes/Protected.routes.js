import {Routes, Route, Navigate} from 'react-router-dom'
/* Components */
import { Auth } from '../Context/Auth.context'

import Dashboard from '../Components/User/Dashboard'
import Profile from '../Components/User/Profile'
import AllReviews from '../Components/User/Reviews'
import Listing from '../Components/User/Listing'
import AddListing from '../Components/User/AddListing'

const ProtectedRoutes = () => {

  const auth = Auth()

  return (
    <Routes>
      {auth.isAuthenticated ? (
        <>
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/profile" exact element={<Profile/>} />
          <Route path="/my-reviews" exact element={<AllReviews/>} />
          <Route path="/listing" exact element={<Listing/>} />
          <Route path="/add/listing" exact element={<AddListing/>} />
        </>
      ) : (
        <>
          <Route path="/dashboard" exact element={<Navigate to="/sign-in"/>} />
          <Route path="/profile" exact element={<Navigate to="/sign-in"/>} />
          <Route path="/my-reviews" exact element={<Navigate to="/sign-in"/>} />
          <Route path="/listing" exact element={<Navigate to="/sign-in"/>} />
          <Route path="/add/listing" exact element={<Navigate to="/sign-in"/>} />
        </>
      )}
    </Routes>
  )
}

export default ProtectedRoutes
