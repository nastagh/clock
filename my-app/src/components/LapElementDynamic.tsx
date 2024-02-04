import { EditVariants } from 'pages/WorldClockPage';
import React from 'react';
import { getDifference } from 'utils/functions';
import '../styles/lapElement.scss';


type LapProps = {
  count: number,
  startTime: string,
  dynamicTime: string
  // minutes: number,
  // seconds: number,
  // milliseconds: number
}


const LapElementDynamic: React.FC<LapProps> = (props) => {
  return (
    <>
    <div className='lap-container'>
      <div>
        {EditVariants.Lap} {props.count}
      </div>
      <div>
        {getDifference(props.startTime, props.dynamicTime)}
      {/* {`${getCorrectData(props.minutes)}:${getCorrectData(props.seconds)},${getCorrectData(props.milliseconds)}`} */}
      </div>
    </div>   
    </>
  )
}


export default LapElementDynamic;