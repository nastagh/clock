import React, { useState } from 'react';
import { TimezoneType } from 'utils/functions';
import '../styles/countryElement.scss';


const moment = require('moment');

type CountryType = {
  data: TimezoneType,
  handleRemove: (value: string) => void;
  isOpen: boolean
}


const CountryElement: React.FC<CountryType> = ({ data, handleRemove, isOpen }) => {
  const showRemoveButton = isOpen;

  return (
    <>
      <div className='country-element-container'>
        {showRemoveButton &&
          <button className='remove-button' onClick={() => handleRemove(data.name)}>-</button>}
        <div>
          {data.name}
        </div>
        <div className='time'>
          {moment().utcOffset(data.utcOffset).format('HH:mm')}
        </div>
      </div>
    </>
  )

}

export default CountryElement;