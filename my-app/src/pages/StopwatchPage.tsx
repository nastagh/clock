import React, { useEffect, useState } from 'react';
import { EditVariants } from './WorldClockPage';
import "../styles/stopWatchPage.scss";
import { getCorrectData } from 'utils/functions';
import LapElementStatic from 'components/LapElementStatic';
import LapElementDynamic from 'components/LapElementDynamic';


const StopwatchPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [reset, setReset] = useState(false);
  const [addLap, setAddLap] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [lapDynamic, setLapDynamic] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00,00');

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => setTime(time + 1), 10);
      return () => clearInterval(timer)
    }
  }, [isRunning, time])

  const startAndStop = () => {
    setIsRunning(!isRunning);
    setLapDynamic(true);
    setReset(false);

    if (isRunning) {
      setReset(true);
    }
  }

  const handleResetLap = (e: React.SyntheticEvent) => {

    switch ((e.target as HTMLButtonElement).value) {
      case EditVariants.Reset:
        setTime(0);
        setReset(false);
        setAddLap([]);
        setCount(1);
        setLapDynamic(false);
        setCurrentTime('00:00,00');
        break;
      case EditVariants.Lap:
        if (isRunning) {
          setCount(count + 1);
          let currentMinutes = getCorrectData(minutes);
          let currentSeconds = getCorrectData(seconds);
          let currentMilliseconds = getCorrectData(milliseconds);
          setCurrentTime(`${currentMinutes}:${currentSeconds},${currentMilliseconds}`);
          setAddLap([`${count}/${currentMinutes}:${currentSeconds},${currentMilliseconds}`, ...addLap]);
        }
    }
  }

  return (
    <>
      <div className='timer'>
        {`${getCorrectData(minutes)}:${getCorrectData(seconds)},${getCorrectData(milliseconds)}`}
      </div>
      <div className='seconds-button-container'>
        <button onClick={e => handleResetLap(e)}
          className='second-button second-button_grey'
          value={!reset ? EditVariants.Lap : EditVariants.Reset}>
          {!reset ? EditVariants.Lap : EditVariants.Reset}
        </button>
        <div className='move-button-container'>
          <div className='move-button move-button_notActive'>
          </div>
          <div className='move-button move-button_active'>
          </div>
        </div>
        <button onClick={startAndStop}
          className={`second-button ${!isRunning ? 'second-button_green' : 'second-button_red'}`}>
          {!isRunning ? EditVariants.Start : EditVariants.Stop}
        </button>
      </div>
      {lapDynamic && <LapElementDynamic
        count={count}
        startTime={currentTime}
        dynamicTime={`${getCorrectData(minutes)}:${getCorrectData(seconds)},${getCorrectData(milliseconds)}`}
        />}
      {addLap.map((item) => <LapElementStatic data={item}/>)}
    </>
  )
}

export default StopwatchPage;


//random color




