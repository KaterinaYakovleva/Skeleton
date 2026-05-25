import styles from "./Range.module.css";

export default function Range() {
  return (
    <div className={styles.container__range}>
      <h3 className={styles.range__title}>Browse The Range</h3>
      <p className={styles.range__desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.range__examples}>
        <div className={styles.example__card}>
          <img src="/interiors/group.png" />
          <h4 className={styles.card__title}>Dining</h4>
        </div>
        <div className={styles.example__card}>
          <img src="/interiors/living_room.png" />
          <h4 className={styles.card__title}>Living</h4>
        </div>
        <div className={styles.example__card}>
          <img src="/interiors/group_2.png" />
          <h4 className={styles.card__title}>Bedroom</h4>
        </div>
      </div>
    </div>
  );
}
