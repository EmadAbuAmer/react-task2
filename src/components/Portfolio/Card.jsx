import style from "./Portfolio.module.css";
const Card = ({ image, title ,classname}) => {
    return (
        <div className="col-md-4">
            <div className={style.card}>
                <img src={image} alt={title}  className={classname}/>
            </div>
        </div>
    );
};

export default Card;
