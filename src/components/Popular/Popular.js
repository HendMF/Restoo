import React from "react";
import './Popular.css'
import "../../images/p_images/P_images";
import P_images from "../../images/p_images/P_images";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Steps from './../Steps/Steps'

export const Popular = () => {
  const PopCards = [
    {
      price: "5$ - 15$",
      img: P_images.p1,
      text: "Tasty Burger",
    },
    {
      price: "5$ - 15$",
      img: P_images.p2,
      text: "Tasty Cakes",
    },
    {
      price: "5$ - 15$",
      img: P_images.p3,
      text: "Tasty Sweets",
    },
    {
      price: "5$ - 15$",
      img: P_images.p4,
      text: "Tasty Cupcakes",
    },
    {
      price: "5$ - 15$",
      img: P_images.p5,
      text: "Cold Drinks",
    },
    {
      price: "5$ - 15$",
      img: P_images.p6,
      text: "Cold Ice-Cream",
    },
  ];
  
  return (
    <section>
      <div className="popular">
        <h1 className="heading">
          Most<span> Popular</span> Foods
        </h1>
        <div className="box-container">
          {PopCards.map((PopCard) => {
            return (
              <div className="popularBox">
                <span className="price">{PopCard.price}</span>
                <img src={PopCard.img} alt="" />
                <h3>{PopCard.text}</h3>
                <div className="stars">
                  <i><FaStar/></i>
                  <i><FaStar/></i>
                  <i><FaStar/></i>
                  <i><FaStar/></i>
                  <i><FaStar/></i>
                </div>
                <Link to="/order" className="btn">
                  order now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Steps />
    </section>
  );
};
export default Popular;
