import React from "react";
import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import picImages from "./../../images/pic_images/pic_images";
const Reviews = () => {
  const Reviews = [
    {
      img: picImages.pic1,
      text: "John Deo",
    },
    {
      img: picImages.pic2,
      text: "John Deo",
    },
    {
      img: picImages.pic3,
      text: "John Deo",
    },
  ];
  return (
    <section className="review">
      <h1 className="heading">
        Our Customers <span>Reviews</span>
      </h1>
      <div className="box-container">
        {Reviews.map((Review) => {
          return (
            <div className="reviewBox">
              <img src={Review.img} alt="" />
              <h3>John Deo</h3>
              <div className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                rerum veniam nobis qui, sunt minima debitis a iste repudiandae,
                eius odio, voluptate cumque culpa? Cupiditate odit ullam cum
                quod velit.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
