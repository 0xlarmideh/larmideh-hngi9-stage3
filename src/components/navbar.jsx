import { Link } from "react-router-dom"

const Navbar = (props) => {
  
  return (
    <nav className="navbar">
      <div>
        <img src="/assets/Vector-1.png"></img>
        <img src="/assets/Vector.png"></img>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <a href="#">Place to stay</a>
        <Link to="/nfts">NFTs</Link>
        <a href="#">Community</a>
      </div>
      <a href="#" className="connect-wallet" onClick={props.onClick} >Connect wallet</a>
    </nav>
  )
}

export default Navbar