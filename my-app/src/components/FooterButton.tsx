import React from 'react';
import { Pages } from 'utils/info';
import '../styles/footer.scss';


type ButtonProps = {
  value: {name: Pages, img: string};
  onClick: (value: Pages) => void;
}


const FooterButton: React.FC<ButtonProps> = ({value, onClick}) => {
  return (
    <div onClick={()=> onClick(value.name)}>
      <img alt={value.name} title={value.name} src={value.img} className='button-img'></img>
      {value.name}
      </div>
  )
}

export default FooterButton;