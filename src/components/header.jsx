const Header = () => {
  return (
    <header className="header-container">
      <div className="grid-item">
        <h1>Rent a <span className="pink">Place</span> away from <span className="pink">Home</span> in the <span className="pink">Metaverse</span></h1> 
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <div className="form-container">
          </div>
          <input placeholder="Search for location" type="text"></input>
          <input type="button">Search</input> 
      </div>
      <div className="grid-item">
        <div className="header-imgs-2 header-imgs-2a">
          <img className="nft-header" src="../assets/1.jpg"></img>
          <img className="nft-header" src="../assets/2.jpg"></img>
        </div>
        <div className="header-imgs-2 header-imgs-2b">
          <img className="nft-header" src="../assets/3.jpg"></img>
          <img className="nft-header" src="../assets/4.jpg"></img>
        </div>
      </div>
    </header>
  )
}

export default Header