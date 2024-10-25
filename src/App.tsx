import './App.css'
import Filter from './Components/filter'
import Header from './Components/header'
import SalesByDate from './Components/sales-by-date'
import SalesSummary from './Components/sales-summary/index';

function App() {


  return (
    <>
      <Header />
      <div className='app-container'>
        <Filter/>
        <SalesByDate />
      </div>
      <div className='sales-overview-container'>
        <SalesSummary/>
      </div>
    </>
  )
}

export default App
