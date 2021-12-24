import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import ProtectedRoutes from './Protected.routes'
import WebsiteRoutes from './Website.routes'
import AuthRoutes from './Auth.routes'

import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  const toTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }

  const scrollerStyle = {
    position: 'fixed',
    bottom: 10,
    right: 10,
    borderRadius: '10px',
    backgroundColor: '#3f3f3f',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '20px',
  }
  return (
    <div className="scroller" style={scrollerStyle} onClick={toTop}>
      <FaArrowUp style={{margin: '15px 15px 10px 15px'}} />
    </div>
  )
};

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <ProtectedRoutes />
      <WebsiteRoutes />
      <AuthRoutes />
    </Router>
  )
}

export default Routes
