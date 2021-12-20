import WebsiteLayout from '../Layouts/Website.layout'
import Hero from '../Home/Hero'
import Artwork from '../Home/Artwork';
import Reviews from '../Home/Reviews';

const Home = () => {
  return (
    <WebsiteLayout>
        <Hero />
        <Artwork />
        <div className="container">
        <hr/>
        </div>
        <Reviews />
    </WebsiteLayout>
  )
}

export default Home
