import React, { useEffect, useState } from 'react';
import { EditVariants } from './WorldClockPage';
import "../styles/stopWatchPage.scss";
import { formatMilliseconds } from 'utils/functions';
import LapElementStatic, { LapStaticProps } from 'components/LapElementStatic';
import LapElementDynamic from 'components/LapElementDynamic';


const StopwatchPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<LapStaticProps[]>([]);
  const [count, setCount] = useState(1);
  const [lapDynamic, setLapDynamic] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const formatedTime = formatMilliseconds(time);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => setTime(time + 1), 10);
      return () => clearInterval(timer)
    }
  }, [isRunning, time]);

  const startAndStop = () => {
    setIsRunning(!isRunning);
    setLapDynamic(true);
  }

  const handleResetLap = () => {
    if(isRunning) {
      setCount(count + 1);
      setCurrentTime(time);
      setLaps([{count, time: formatMilliseconds(time-currentTime)},...laps])
    } else {
      setTime(0);
      setLaps([]);
      setCount(1);
      setLapDynamic(false);
      setCurrentTime(0);
    }
  }

  return (
    <>
      <div className='timer'>
        {formatedTime}
      </div>
      <div className='seconds-button-container'>
        <button onClick={handleResetLap}
          className='second-button second-button_grey'>
          {(isRunning || time===0) ? EditVariants.Lap : EditVariants.Reset}
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
        dynamicTime={time}
        />}
      {laps.map((item) => <LapElementStatic {...item}/>)}
    </>
  )
}

export default StopwatchPage;




