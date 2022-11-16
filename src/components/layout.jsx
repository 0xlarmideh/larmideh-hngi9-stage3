import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./modal";
import { useState } from 'react';

const Layout = ({children}) => {
  const [openModal, setOpenModal] = useState(false);
    
    return (
      <>
        <Navbar onClick={() => {
        console.log("Hello");
        setOpenModal(true)} } />
        <Modal open={openModal} onClose={() => setOpenModal(false)} /> 
        {children}
        <Footer />
      </>
    )
}

export default Layout