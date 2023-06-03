import React from 'react';
import './SpecialityCard.css';

const SpecialityCard = (props) => {
  return (
    <div className="spicialityBox">
      <img src={props.info.cardImg} alt="" className="box-image" />
      <div className="content">
        <img src={props.info.textImg} alt="" />
        <h3>{props.info.main_text}</h3>
        <p>{props.info.main_p}</p>
      </div>
    </div>
  );
}

export default SpecialityCard