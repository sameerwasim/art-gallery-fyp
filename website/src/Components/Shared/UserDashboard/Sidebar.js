import { Link } from 'react-router-dom'
import { FaUser, FaStar, FaHome, FaComment } from 'react-icons/fa'
import './profile.scss'

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column shadow h-100 pt-3 py-md-5">
        <Link className="text-decoration-none" to="/dashboard">
          <FaHome />
          &nbsp; Dashboard
        </Link>
        <Link className="text-decoration-none" to="/profile">
          <FaUser />
          &nbsp; Profile
        </Link>
        <Link className="text-decoration-none" to="/my-reviews">
          <FaComment />
          &nbsp; My Reviews
        </Link>
        <Link className="text-decoration-none" to="/listing">
             <FaStar/>&nbsp; My Artwork Listing
        </Link>
    </div>
  )
}

export default Sidebar
