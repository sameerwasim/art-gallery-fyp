import {Routes, Route} from 'react-router-dom'
/* Components */
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Artists from '../Components/Artists/Artists'
import Artwork from '../Components/Artists/Artwork'
import Contact from '../Components/Contact/Contact'
import About from '../Components/About/About'
import ThankYou from '../Components/ThankYou/ThankYou'


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/search/:category" exact element={<Search/> } />
      <Route path="/artwork/:id" exact element={<Artwork/>} />
      <Route path="/artist/:username" exact element={<Artists/>} />
      <Route path="/contact" exact element={<Contact/>} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/thank-you" exact element={<ThankYou/>} />
    </Routes>
  )
}

export default WebsiteRoutes
