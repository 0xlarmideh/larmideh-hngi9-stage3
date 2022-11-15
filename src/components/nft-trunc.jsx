import Cards from "./card.jsx"

const NftTrunc = () => {
  const nftData = ["./src/assets/1.jpg", "./src/assets/2.jpg", "./src/assets/3.jpg", "./src/assets/4.jpg", "./src/assets/5.jpg", "./src/assets/6.jpg", "./src/assets/7.jpg", "./src/assets/8.jpg", "./src/assets/9.jpg", "./src/assets/10.jpg", "./src/assets/11.jpg", "./src/assets/12.jpg", "./src/assets/13.jpg", "./src/assets/14.jpg", "./src/assets/15.jpg", "./src/assets/16.jpg"]
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