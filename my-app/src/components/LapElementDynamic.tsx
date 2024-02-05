import { EditVariants } from 'pages/WorldClockPage';
import React from 'react';
import { formatMilliseconds} from 'utils/functions';
import '../styles/lapElement.scss';


type LapProps = {
  count: number,
  startTime: number,
  dynamicTime: number
}


const LapElementDynamic: React.FC<LapProps> = (props) => {
  return (
    <>
    <div className='lap-container'>
      <div>
        {EditVariants.Lap} {props.count}
      </div>
      <div>
        {formatMilliseconds(props.dynamicTime-props.startTime)}
      </div>
    </div>   
    </>
  )
}


export default LapElementDynamic;