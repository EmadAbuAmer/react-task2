import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.mainContainer}>
      <div className="container text-white text-center p-5">
        <div className={style.row}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="location">Location</h2>
            <p className="address">2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="contact">Around the Web</h2>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i class="fa-solid fa-basketball"></i>
              </a>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>About Freelancer</h2>
            <p className="about-text">
              Freelance is a free to use,
              <br /> MIT licensed Bootstrap theme created by &nbsp;
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                Start Bootstrap .
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p className={style.footerText}>
          Copyright © Your Website 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
