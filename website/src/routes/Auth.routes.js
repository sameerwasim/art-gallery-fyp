import {Routes, Route} from 'react-router-dom'
/* Components */
import SignIn from '../Components/Authentication/SignIn/SignIn'
import ResetPassword from '../Components/Authentication/ResetPassword/ResetPassword'
import SignUp from '../Components/Authentication/SignUp/SignUp'
import VerifyAccount from '../Components/Authentication/VerifyAccount/VerifyAccount'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" exact element={<SignUp/>} />
      <Route path="/sign-in" exact element={<SignIn/>} />
      <Route path="/reset-password" exact element={<ResetPassword/>} />
      <Route path="/verify-account/:id" exact element={<VerifyAccount/>} />
    </Routes>
  )
}

export default AuthRoutes
