import './App.css'
import Filter from './Components/filter'
import Header from './Components/header'
import SalesByDate from './Components/sales-by-date'

function App() {


  return (
    <>
      <Header />
      <div className='app-container'>
        <Filter/>
        <SalesByDate />
      </div>
    </>
  )
}

export default App
