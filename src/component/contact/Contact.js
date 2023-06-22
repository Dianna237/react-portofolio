import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((response) => {
        alert("form send to server");
        console.log(response);
      })
      .then((data) => console.log(data))
      .catch((error) => {
        alert("fail to submit form");
      });
  };
  console.log(formData);
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_container">
          <h1>Contact Me</h1>
          <div className="inner_form">
            <label htmlFor="fullN">Full Name* </label>
            <input
              type="text"
              name="name"
              id="fullN"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="inner_form">
            <label htmlFor="email">Your Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="inner_form">
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary form_btn">
            send message
          </button>
        </div>
      </form>
      {/* </div> */}
    </section>
  );
};
export default Contact;
