import qrcode from './assets/images/image-qr-code.png';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={qrcode} alt="qr code" />
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App
