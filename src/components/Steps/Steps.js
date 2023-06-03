import React from 'react';
import './Steps.css'
import StepImg from '../../images/step_images/StepImg';

const Steps = () => {
    const Steps = [
        {
            img : StepImg.step_1,
            text : 'Choose Your Favorite Food', 
        },
        {
            img : StepImg.step_2,
            text : 'Free And Fast Delivery', 
        },
        {
            img : StepImg.step_3,
            text : 'Easy Payments Methods', 
        },
        {
            img : StepImg.step_4,
            text : 'And Finally, Enjoy Your Food', 
        }   
    ]
  return (
    <div class="step-container">
        <h1 class="heading">How it<span> works</span></h1>
        <div class="steps">
          {Steps.map(Step => {
            return (
              <div class="box">
                <img src={Step.img} alt="" />
                <h3>{Step.text}</h3>
              </div>
            );
          })}
        </div>  
    </div>      
  );
}

export default Steps;