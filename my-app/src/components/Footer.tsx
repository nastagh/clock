import React from 'react';
import { Pages, buttons } from 'utils/info';
import FooterButton from './FooterButton';
import '../styles/footer.scss';


type FooterType = {
  onChange: (value: Pages) => void;
}


const Footer: React.FC<FooterType> = ({onChange}) => {
  return (
    <footer>
      <div  className='button-container'>
          {buttons.map((item) => {
            return (
              <FooterButton value={item} onClick={onChange}/>
            )
          })}
      </div>
    </footer>
  )
}

export default Footer;