import { Link } from "react-router-dom"

const Navbar = (props) => {
  
  return (
    <nav className="navbar">
      <div className="navbar1-flex">
        <div className="navbar-logo-flex">
          <img src="/assets/Vector-1.png"></img>
          <img src="/assets/Vector.png"></img>
        </div>
        <div className="navbar-menu"><i className="fa-solid fa-bars" onClick={props.onOpen} ></i></div>
      </div>
        <div className="links">
          <Link to="/">Home</Link>
          <a href="#">Place to stay</a>
          <Link to="/nfts">NFTs</Link>
          <a href="#" className="nav-community">Community</a>
        </div>
        <a href="#" className="connect-wallet" onClick={props.onClick} >Connect wallet</a>
    </nav>
  )
}

export default Navbar