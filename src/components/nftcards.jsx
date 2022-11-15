import data from "./nftdata"
import { useState } from "react"}
const NftCards = () => {
  const [nftData] = useState(data.src)
  const nftDataTrunc = nftData.slice(4,12)
  const nftMapped = nftDataTrunc.map((nft) => {
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
    <div className="nft-links"></div>
      <div className="nft-cards-container">{nftMapped}</div>
    </section>
  )
}

export default NftCards