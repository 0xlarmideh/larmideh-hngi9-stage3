import data from "./nftdata"
import { useState } from "react"}
const NftCards = () => {
  const [nftData] = useState(data.src)
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
        <img src="../assets/rating.png"></img>
      </div>
    </div>
  })
  return (
    <section className="nft-home-cards">
    <div className="nft-links">
      <a href="#" className="nft-link">Restaurant</a>
      <a href="#" className="nft-link">Cottage</a>
      <a href="#" className="nft-link">Castle</a>
      <a href="#" className="nft-link">Fantast City</a>
      <a href="#" className="nft-link">Beach</a>
      <a href="#" className="nft-link">Cabins</a>
      <a href="#" className="nft-link">Off-grid</a>
      <a href="#" className="nft-link">Farm</a>
      <div className="filter">
        <input placeholder="Location"></input>
      </div>
    </div>
      <div className="nft-cards-container">{nftMapped}</div>
    </section>
  )
}

export default NftCards