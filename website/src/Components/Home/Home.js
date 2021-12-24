import WebsiteLayout from '../Layouts/Website.layout'
import Hero from '../Home/Hero'
import Artwork from '../Home/Artwork';
import Review from '../Home/Reviews';

const Home = () => {
  return (
    <WebsiteLayout>
        <Hero />
        <Artwork />
        <div className="container">
          <hr/>
          <Review />
        </div>
    </WebsiteLayout>
  )
}

export default Home
