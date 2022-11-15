import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./components/homepage"
import NftCards from "./components/nftcards"

export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/nfts" element={<NftCards/>} />
          </Routes>
        </BrowserRouter>
  )
}
