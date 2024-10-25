import './styles.css';
import SalesSummaryCard from './SalesSummaryCard';


const SalesSummary = () => {
  return (
    <div className='sales-summary-container'>
      <SalesSummaryCard />
      <SalesSummaryCard/>
      <SalesSummaryCard/>
      <SalesSummaryCard/>
    </div>
  )
}

export default SalesSummary