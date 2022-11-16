import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./modal";
import { useState } from 'react';

const Layout = ({children}) => {
  const [openModal, setOpenModal] = useState(false);

  // Toggle Navbar
  function toggleNav() {
    const x = document.querySelector(".links");
    const y = document.querySelector(".connect-wallet");
    
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
    
    return (
      <>
        <Navbar onClick={() => {
        console.log("Hello");
        setOpenModal(true)} } onOpen={toggleNav} />
        <Modal open={openModal} onClose={() => setOpenModal(false)} /> 
        {children}
        <Footer />
      </>
    )
}

export default Layout