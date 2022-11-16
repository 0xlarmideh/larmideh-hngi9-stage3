// import ReactDom from 'react-dom'

const Modal = (props) => {
  if (!props.open) return null
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right:0,
    bottom: 0,
    background: 'rgba(64, 64, 64, 0.3)',
    zIndex: 10,
  }
  return (
    <div>
      <div className="overlay-style" style={OVERLAY_STYLES}></div>
      <div className="wallet-modal">
        <div className="modal-container">
          <div className="connect-wallet-container">
          <h5>Connect Wallet</h5><i className="fa-solid fa-xmark" onClick={props.onClose} ></i>
          </div>
          <p>Choose your preferred wallet</p>
          <div className="wallet-container">
           <div>
             <img src="./assets/metamask-logo.png"></img>
             <h5>Metamask</h5>
           </div> 
            <i className="fa-solid fa-chevron-right"></i>
            
          </div>
          <div className="wallet-container">
            <div>
              <img src="./assets/walletconnect.png"></img>
              <h5>WalletConnect</h5>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal