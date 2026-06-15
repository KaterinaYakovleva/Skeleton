import styles from "./CartTotal.module.css";

export default function CartTotal() {
  return (
    <div className={styles.cart_total_container}>
      <h3 className={styles.cart_total_header}>Общая сумма</h3>
      <span className={styles.cart_subtotal}>
        <p className={styles.cart_subtotal_title}>Подытог</p>
        <p className={styles.cart_subtotal_sum}>Сумму добавить</p>
      </span>
      <span className={styles.cart_total}>
        <p className={styles.cart_total_title}>Итог</p>
        <p className={styles.cart_total_sum}>Сумму добавить</p>
      </span>
      <button type="button" className={styles.cart_total_order}>Заказать</button>
    </div>
  );
}
