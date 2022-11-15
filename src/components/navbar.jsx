import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="../assets/Vector-1.png"></img>
        <img src="../assets/Vector.png"></img>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">Place to stay</a>
        <a href="#">Home</a>
        <a href="#">Community</a>
      </div>
      <div><Link>Connect wallet</Link></div>
    </nav>
  )
}

export default Navbar