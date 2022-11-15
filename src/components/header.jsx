const Header = () => {
  return (
    <header className="header-container">
      <div className="grid-item">
        <h1>Rent a <span className="pink">Place</span> away from <span className="pink">Home</span> in the <span className="pink">Metaverse</span></h1> 
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <div className="form-container">
          <input placeholder="Search for location" type="text"></input>
          <button >Search</button> 
        </div>
      </div>
      <div className="grid-item2">
        <div className="header-imgs-2 header-imgs-2a">
          <img className="nft-header" src="./src/assets/head2.png"></img>
          <img className="nft-header" src="./src/assets/head4.png"></img>
        </div>
        <div className="header-imgs-2 header-imgs-2b">
          <img className="nft-header" src="./src/assets/head1.png"></img>
          <img className="nft-header" src="./src/assets/head3.png"></img>
        </div>
      </div>
    </header>
  )
}

export default Header