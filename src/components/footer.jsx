const Footer = () => {
  const community = ["NFT", "Tokens", "Landlords","Discord"];
  const places = ["Castle", "Farms", "Beach", "Learn more"];
  const about = ["Roadmap", "Creators", "Career", "Contact us"];

  const communityMapped = community.map((item) => <a href="#" key={item}>{item}</a>)
  const placesMapped = places.map((item) => <a href="#" key={item}>{item}</a>)
  const aboutMapped = about.map((item) => <a href="#" key={item}>{item}</a>)
  return (
    <footer className="footer-grid">
      <div className="footer-grid-item">
        <div className="metabnb-logo">Metabnb</div>
        <div className="social-logos"></div>
        <div>© 2022 Metabnb</div>
      </div>
      <div className="footer-grid-item"><div className="footer-link-head">Community</div>{communityMapped}</div>
      <div className="footer-grid-item"><div className="footer-link-head">Places</div>{placesMapped}</div>
      <div className="footer-grid-item"><div className="footer-link-head">About Us</div>{aboutMapped}</div>
    </footer>
  )
}


export default Footer