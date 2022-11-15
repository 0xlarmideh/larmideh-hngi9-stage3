import Header from "./header";
import Backers from "./backers";
import NftTrunc from "./nft-trunc";
import MetaBnbCopy from "./metabnbcopy";
import Layout from "./layout"

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Backers />
        <NftTrunc />
        <MetaBnbCopy />
      </Layout>
    </div>
  )
}

export default Homepage