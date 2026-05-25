import { useNavigate } from "react-router";
import styles from "./Advertisment.module.css";

export default function Advertisment() {
  const navigate = useNavigate();
  const onSubmitHandler = async () => {
    navigate("/products");
  };
  return (
    <div className={styles.container__advert}>
      <img
        className={styles.img__back}
        src="/interiors/scandinavian_interior.jpg"
      ></img>
      <div className={styles.description}>
        <h5 className={styles.advert__title2}>New Arrival</h5>
        <h1 className={styles.advert__title1}>Discover Our New Collection</h1>
        <p className={styles.advert__desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className={styles.button__buy} onClick={onSubmitHandler}>
          BUY NOW
        </button>
      </div>
    </div>
  );
}
