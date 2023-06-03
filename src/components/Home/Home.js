import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HOME from "./../../images/home_images/HOME";
function Home() {
  return (
    <section className="Home">
      <div className="content">
        <h3>Food Made With Love</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          reiciendis similique quae ullam? Nisi nam pariatur eveniet est,
          voluptas, nemo facere natus labore veritatis sequi alias saepe illum
          reprehenderit quod!
        </p>
        <Link to="/home" class="btn">
          order now
        </Link>
      </div>
      <div className="image">
        <img src={HOME.home_img} alt="" />
      </div>
    </section>
  );
}

export default Home;
