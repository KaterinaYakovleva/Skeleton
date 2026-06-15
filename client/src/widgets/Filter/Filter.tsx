import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={styles.filter__container}>
      <div className={styles.filter__pics}>
        <span className={styles.filter__pages__pics}>
          <img className={styles.filter__icons} src="./filter/Vector.png"></img>
          Фильтр
        </span>
        <img
          className={styles.filter__icons}
          src="./filter/ci_grid-big-round.png"
        ></img>
        <img
          className={styles.filter__icons}
          src="./filter/bi_view-list.png"
        ></img>
        <span className={styles.filter__line}>|</span>
        <span className={styles.filter__pages__number}>Показано из</span>
      </div>
      <div className={styles.filter__right_side}>
        <span className={styles.filter__pages}>Показывать по</span>
        {/* <span className={styles.filter__sort}>Показывать по</span> */}
        <span className={styles.filter__pages}>Сортировать по</span>
        {/* <span className={styles.filter__sort}>Показывать по</span> */}
      </div>
    </div>
  );
}
