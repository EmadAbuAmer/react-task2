import style from "./Portfolio.module.css";
import cabin from "../../assets/cabin.png";
import game from "../../assets/game.png";
import safe from "../../assets/safe.png";
import circus from "../../assets/circus.png";
import submarine  from "../../assets/submarine.png";
import cake from "../../assets/cake.png";
import Card from "./Card";

const Portfolio = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
      <h2 className={style.title}>PORTFOLIO</h2>
      <div className={style.dividerContainer}>
        <div className={style.divider}></div>
        <div className={style.star}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={style.divider}></div>
      </div>
      <div className="row g-5">
        <Card image={cabin} title="Cabin" classname={style.imgFluid + " img-fluid"} />
        <Card image={cake} title="Cake" classname={style.imgFluid + " img-fluid"} />
        <Card image={circus} title="Circus" classname={style.imgFluid + " img-fluid"} />
        <Card image={game} title="Game" classname={style.imgFluid + " img-fluid"} />
        <Card image={safe} title="Safe" classname={style.imgFluid + " img-fluid"} />
        <Card image={submarine} title="Submarine" classname={style.imgFluid + " img-fluid"} />
      </div>
    </div>
  );
};

export default Portfolio;
