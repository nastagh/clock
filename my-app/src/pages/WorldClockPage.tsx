import React, { useEffect, useState } from 'react';
import "../styles/worldClockPage.scss"
import Modal from 'components/Modal';
import CountryElement from 'components/CountryElement';
import { TimezoneType } from 'utils/functions';

export enum EditVariants {
  Edit = 'Edit',
  Done = 'Done',
  Lap = 'Lap',
  Start = 'Start',
  Stop = 'Stop',
  Reset = 'Reset'
}

const WorldClockPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [countryData, setCountryData] = useState<TimezoneType[]>([]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [update, setUpdate] = useState(new Date().getMinutes());

  useEffect(() => {
    const timer = setInterval(() => setUpdate(new Date().getMinutes()), 1000);
    return () => clearInterval(timer)
  }, [])

  const setWorldClock = (name: string, utcOffset: number) => {
    if (!(countryData.some((country) => (country.name === name)))) {
      setCountryData([...countryData, { name: name, utcOffset: utcOffset }])
    }
    setShowModal(false);
  }

  const removeData = (name: string) => {
    setCountryData(countryData.filter((country) => (country.name !== name)));
  }

  return (
    <>
      {showModal && <Modal onChoose={setWorldClock} />}
      <div className='settings-container'>
        <div onClick={() => setShowRemoveButton(!showRemoveButton)}>
          {(showRemoveButton) ? EditVariants.Done : EditVariants.Edit}
        </div>
        <div onClick={() => setShowModal(true)}>
          +
        </div>
      </div>
      <h1>
        World Clock
      </h1>
      {countryData.map(item =>
        <CountryElement
          data={item}
          handleRemove={removeData}
          isOpen={showRemoveButton}
        />)}
    </>
  )
}

export default WorldClockPage;