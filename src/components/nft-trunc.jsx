import Cards from "./card.jsx"

const NftTrunc = () => {
  const nftData = ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg", "/assets/4.jpg", "/assets/5.jpg", "/assets/6.jpg", "/assets/7.jpg", "/assets/8.jpg", "/assets/9.jpg", "/assets/10.jpg", "/assets/11.jpg", "/assets/12.jpg", "/assets/13.jpg", "/assets/14.jpg", "/assets/15.jpg", "/assets/16.jpg"]
  const nftDataTrunc = nftData.slice(4,12)
  const nftMapped = nftDataTrunc.map((nft) => {
    return <Cards key={nft} nft={nft} />
  })
  return (
    <section className="nft-home-cards">
      <h3>Inspiration for your next adventure</h3>
      <div className="nft-cards-container">{nftMapped}</div>
    </section>
  )
}

export default NftTrunc