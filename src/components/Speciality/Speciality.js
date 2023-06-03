import React from "react";
import "./Speciality.css";
import SpecialityCard from "./../SpecialityCard/SpecialityCard";
import S_images from "./../../images/s_images/S_Images";
import SmallImages from "./../../images/small_images/SmallImages";

export const Speciality = () => {
  
  return (
    <section className="speciality">
      <h1>
        Our<span>Speciality</span>
      </h1>
      <div className="box-container">
        <SpecialityCard
          info={{
            cardImg: S_images.sImg1,
            textImg: SmallImages.s1,
            main_text: "Tasty Burger",
            main_p:
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Distinctio Reiciendis Similique Quae Ullam? Nisi Nam Pariatur Eveniet Est, Voluptas, Nemo Facere Natus Labore Veritatis Sequi Alias Saepe Illum Reprehenderit Quod!",
          }}
        />
        <SpecialityCard
          info={{
            cardImg: S_images.sImg2,
            textImg: SmallImages.s2,
            main_text: "Tasty Pizza",
            main_p:
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Distinctio Reiciendis Similique Quae Ullam? Nisi Nam Pariatur Eveniet Est, Voluptas, Nemo Facere Natus Labore Veritatis Sequi Alias Saepe Illum Reprehenderit Quod!",
          }}
        />
        <SpecialityCard
          info={{
            cardImg: S_images.sImg3,
            textImg: SmallImages.s3,
            main_text: "Cold Ice-Cream",
            main_p:
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Distinctio Reiciendis Similique Quae Ullam? Nisi Nam Pariatur Eveniet Est, Voluptas, Nemo Facere Natus Labore Veritatis Sequi Alias Saepe Illum Reprehenderit Quod!",
          }}
        />
        <SpecialityCard
          info={{
            cardImg: S_images.sImg4,
            textImg: SmallImages.s4,
            main_text: "Cold Drinks",
            main_p:
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Distinctio Reiciendis Similique Quae Ullam? Nisi Nam Pariatur Eveniet Est, Voluptas, Nemo Facere Natus Labore Veritatis Sequi Alias Saepe Illum Reprehenderit Quod!",
          }}
        />

        <SpecialityCard
          info={{
            cardImg: S_images.sImg5,
            textImg: SmallImages.s5,
            main_text: "Tasty Sweets",
            main_p:
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Distinctio Reiciendis Similique Quae Ullam? Nisi Nam Pariatur Eveniet Est, Voluptas, Nemo Facere Natus Labore Veritatis Sequi Alias Saepe Illum Reprehenderit Quod!",
          }}
        />
        <SpecialityCard
          info={{
            cardImg: S_images.sImg6,
            textImg: SmallImages.s6,
            main_text: "Healthy Breakfast",
            main_p:
              "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Distinctio Reiciendis Similique Quae Ullam? Nisi Nam Pariatur Eveniet Est, Voluptas, Nemo Facere Natus Labore Veritatis Sequi Alias Saepe Illum Reprehenderit Quod!",
          }}
        />
      </div>
    </section>
  );
};
export default Speciality;
        
       