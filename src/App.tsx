import forSaleSign from './assets/ForSale.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={forSaleSign} className="logo" alt="For Sale" />
      </div>
      <h1>This Domain Is For Sale</h1>
      <div className="card">
       <p>
          For inquiries, please email <a href="mailto:samcorl@gmail.com" className="email-link">Sam Corl</a>.
        </p>
      </div>
    </>
  )
}

export default App
