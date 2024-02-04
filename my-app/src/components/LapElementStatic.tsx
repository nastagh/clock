import { EditVariants } from 'pages/WorldClockPage';
import React from 'react';
import { getCorrectData } from 'utils/functions';
import '../styles/lapElement.scss';


type LapStaticProps = {
  data: string
}


const LapElementStatic: React.FC<LapStaticProps> = (props) => {

  return (
    <>
    <div className='lap-container'>
      <div>
        {EditVariants.Lap} {props.data.split('/')[0]}
      </div>
      <div>
      {props.data.split('/')[1]}
      </div>
    </div>   
    </>
  )
}


export default LapElementStatic;
