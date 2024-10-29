import './styles.css';
import icon04 from '../../assets/icon04.svg';

const SalesSummaryCard = () => {
  return (
    <div className="sales-summary-card base-card">
      <img src={icon04} alt="Icon" className="sales-summary-card-icon" />
      <h3 className="sales-summary-card-value">534.00</h3>
      <span className="sales-summary-card-label">Média</span>
    </div>
  );
}

export default SalesSummaryCard;
