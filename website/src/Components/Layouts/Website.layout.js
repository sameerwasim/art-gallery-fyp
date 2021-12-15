import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'

function WebsiteLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default WebsiteLayout
