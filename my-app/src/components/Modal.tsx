import React, { useState } from 'react';
import '../styles/modal.scss';
import { countriesData } from 'utils/functions';


type ModalProps = {
  onChoose: (name: string, utcOffset: number) => void;
}

const Modal: React.FC<ModalProps> = ({ onChoose }) => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='modal'>
      <input
        type='search'
        className='search'
        value={searchValue}
        onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
        placeholder='Type to search'>
      </input>
      {countriesData.filter((country) => 
        country.countryName.toLowerCase().includes(searchValue.toLowerCase())
      ).map((item) => 
        (
          <div
            className='modal-item-container'
            onClick={() => onChoose(item.countryName, item.utcOffset)}
            key={item.countryName}>
            <div>
              {item.countryName}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Modal;