import React, { useState } from "react";
import style from "./Contact.module.css";
import CustomInput from "./CustomInput";
const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, phone, message });
    setSend(true);
  };
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center my-5">
      <h2 className={style.title}>contact me</h2>
      <div className={style.dividerContainer}>
        <div className={style.divider}></div>
        <div className={style.star}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={style.divider}></div>
      </div>
      <div className="d-flex flex-column align-items-start justify-content-center gap-3">
        <CustomInput
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Full name"
          className={style.inputClass}
        />
        <CustomInput
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email address"
          className={style.inputClass}
        />
        <CustomInput
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          className={style.inputClass}
        />
        <textarea
          className={`${style.textarea}`}
          value={message}
          onChange={handleMessageChange}
          placeholder="Message"
        ></textarea>
        <button
          className={` ${style.button}`}
          onClick={handleSubmit}
        >
          {send ? "Sent" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
