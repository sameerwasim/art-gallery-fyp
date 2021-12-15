import {Routes, Route} from 'react-router-dom'
/* Components */
import Home from '../Components/Home/Home'

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default WebsiteRoutes
