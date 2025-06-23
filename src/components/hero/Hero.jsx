import style from './Hero.module.css';
import avatar from '../../assets/avataaars.svg';

const Hero = () => {
  return (
    <div className={style.heroContainer + ' d-flex align-items-center justify-content-center flex-column'}>
      <img src={avatar} alt='Avatar' className={style.heroAvatar} />
      <h2 className={style.heroTitle + ' mt-4'}>Start Bootstrap</h2>
      
      <div className={style.dividerContainer}>
        <div className={style.divider}></div>
        <div className={style.star}><i className="fa-solid fa-star"></i></div>
        <div className={style.divider}></div>
      </div>
      
      <p className={style.heroSubtitle + ' mb-5'}>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
};

export default Hero;
