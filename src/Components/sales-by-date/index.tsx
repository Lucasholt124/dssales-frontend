import { chartOptions } from './helpers';
import './styles.css';
import ReactApexChart from 'react-apexcharts';

const initialData = [
  {
    x: '01/07/2022',
    y: 1000
  },
  {
    x: '02/08/2022',
    y: 1200
  },
  {
    x: '03/09/2022',
    y: 1400
  },
  {
    x: '04/10/2022',
    y: 1600
  },
  {
    x: '05/11/2022',
    y: 1800
  },
  {
    x: '06/12/2022',
    y: 2000
  }
]

const SalesByDate = () => {
  return (
    <div className="sales-by-date-container base-card">
      <div>
        <h4 className='sales-by-date-title'>Evolução das vendas</h4>
        <span className='sales-by-date-period'>01/07/2022 a 30/09/2022</span>
      </div>
      <div className='sales-by-date-data'>
        <div className='sales-by-date-quantity-container'>
          <h2 className='sales-by-date-quantity'>464.988,00</h2>
          <span className='sales-by-date-quantity-label'>vendas no período</span>
          <span className='sales-by-date-quantity-description'>
            O valor das vendas do ano passado
          </span>
        </div>
        <div className='sales-by-date-chart'>

          <ReactApexChart options={chartOptions}
          series={[{name: 'Vendas', data: initialData }]}
          type="bar" height={240} width={'100%'}
          />

        </div>

      </div>
    </div>
  )
}

export default SalesByDate