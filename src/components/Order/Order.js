import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Order.css";
import order_img from "./../../images/order_img.jpg";
const Order = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3cqwjk8",
        "template_0gjvtrd",
        form.current,
        "JXrJ9rdvr-1jvU2cv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

  };
  return (
    <section class="order" id="order">
      <h1 class="heading">
        {" "}
        Our Customers <span>Orders</span>
      </h1>
      <div class="row">
        <div class="order-image">
          <img src={order_img} alt="" />
        </div>
        <form action="" onSubmit={sendEmail} ref={form}>
          <div class="orderBox">
            <input type="text" placeholder="name" required name="to_name" />
            <input type="email" placeholder="email" required name="from_name" />
          </div>
          <div class="orderBox">
            <input type="tel" placeholder="Phone number" required />
            <input type="text" placeholder="food name" required />
          </div>

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="address"
            required
          ></textarea>

          <input type="submit" value="order now" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Order;
