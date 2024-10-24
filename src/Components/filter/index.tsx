import './syles.css';

import Flatpickr from 'react-flatpickr';
import flatpickrLib from 'flatpickr';

import { Portuguese } from 'flatpickr/dist/l10n/pt';

import 'flatpickr/dist/flatpickr.min.css';


flatpickrLib.localize(Portuguese);

const Filter = () => {

  const onChangeDate = (dates: Date[]) => {
    console.log(dates);
  };

  return (
    <div className='filter-container base-card'>
      <Flatpickr
      options={{
        mode: 'range',
        dateFormat: 'd-m-Y',
        showMonths: 2
      }}
      className='filter-input'
      onChange={onChangeDate}
      placeholder='Selecione um periodo'
      />
      <select className='filter-input'>
        <option value="" >Selecione um gênero</option>
        <option value=" MALE" >Masculino</option>
        <option value="FEMALE" >Feminino</option>
        <option value=" OTHER" >Outros</option>
      </select>
    </div>
  )
}

export default Filter