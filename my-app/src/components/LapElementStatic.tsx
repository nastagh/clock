import { EditVariants } from 'pages/WorldClockPage';
import React from 'react';
import '../styles/lapElement.scss';


export type LapStaticProps = {
  count: number,
  time: string
}


const LapElementStatic: React.FC<LapStaticProps> = (props) => {

  return (
    <>
    <div className='lap-container'>
      <div>
        {EditVariants.Lap} {props.count}
      </div>
      <div>
      {props.time}
      </div>
    </div>   
    </>
  )
}


export default LapElementStatic;
