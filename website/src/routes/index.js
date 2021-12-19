import { BrowserRouter as Router } from 'react-router-dom'

import ProtectedRoutes from './Protected.routes'
import WebsiteRoutes from './Website.routes'
import AuthRoutes from './Auth.routes'

const Routes = () => {
  return (
    <Router>
      <ProtectedRoutes />
      <WebsiteRoutes />
      <AuthRoutes />
    </Router>
  )
}

export default Routes
