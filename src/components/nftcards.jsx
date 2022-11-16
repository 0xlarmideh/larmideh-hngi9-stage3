import Layout from "./layout"

const NftCards = () => {
  const nftData = ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg", "/assets/5.jpg", "/assets/6.jpg", "/assets/7.jpg", "/assets/8.jpg", "/assets/9.jpg", "/assets/10.jpg", "/assets/11.jpg", "/assets/12.jpg", "/assets/13.jpg", "/assets/14.jpg", "/assets/15.jpg", "/assets/16.jpg"]
  const nftMapped = nftData.map((nft) => {
    return <div className="card-container">
      <img className="nft-img" src={nft}></img>
      <div className="nft-texts">
        <div className="nft-flexed">
          <p>Desert king</p>
          <p className="nft-price">1MBT per night</p>
        </div>
        <div className="nft-flexed">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <img src="/assets/rating.png"></img>
      </div>
    </div>
  })
  return (
    <Layout>
      <section className="nft-home-cards">
      <div className="nft-links">
          <div><a href="#" className="nft-link">Restaurant</a></div>
          <div><a href="#" className="nft-link">Cottage</a></div>
          <div><a href="#" className="nft-link">Castle</a></div>
          <div><a href="#" className="nft-link">Fantast City</a></div>
          <div><a href="#" className="nft-link">Beach</a></div>
          <div><a href="#" className="nft-link">Cabins</a></div>
          <div><a href="#" className="nft-link">Off-grid</a></div>
          <div><a href="#" className="nft-link">Farm</a></div>
        <div className="filter">
          <input className="location-input" placeholder="Location"></input>
        </div>
      </div>
        <div className="nft-cards-container">{nftMapped}</div>
      </section>
    </Layout>
  )
}

export default NftCards