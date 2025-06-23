import style from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={style.bg}>
        <div className="container  d-flex flex-column align-items-center gap-4">
          <h2 className={style.title}>About</h2>
          <div className={style.dividerContainer}>
            <div className={style.divider}></div>
            <div className={style.star}>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className={style.divider}></div>
          </div>
          <div className={style.row}>
            <p className={style.text}>
            Freelancer is a free bootstrap theme created by Start Bootstrap.
            The download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className={style.text}>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
          </div>
            <a href="https://startbootstrap.com/theme/freelancer"  className={style.btn} target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-download"></i>  Free Download!
            </a>
        </div>
      </div>
    </>
  );
};

export default About;
