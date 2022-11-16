const Cards = (props) => {
  return (
    <div className="card-container">
      <img className="nft-img" src={props.nft}></img>
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
  )
}

export default Cards