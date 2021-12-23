import {Routes, Route} from 'react-router-dom'
/* Components */
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Artists from '../Components/Artists/Artists'
import Artwork from '../Components/Artists/Artwork'
import Contact from '../Components/Contact/Contact'
import FAQs from '../Components/FAQs/FAQs'
import About from '../Components/About/About'
import Reviews from '../Components/Reviews/Reviews'
import Thankyou from '../Components/ThankYou/ThankYou'


const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/search/:category" exact element={<Search/> } />
      <Route path="/artists" exact element={<Artists/>} />
      <Route path="/artwork/:id" exact element={<Artwork/>} />
      <Route path="/faqs" exact element={<FAQs/>} />
      <Route path="/contact" exact element={<Contact/>} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/reviews" exact element={<Reviews/>} />
      <Route path="/thank-you" exact element={<Thankyou/>} />
    </Routes>
  )
}

export default WebsiteRoutes
