import styles from "./CartTotal.module.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";

export default function CartTotal() {
  const { currentCart: cart } = useSelector((state: RootState) => state.cart);
  const total = cart?.total || 0;

  return (
    <div className={styles.cart_total_container}>
      <h3 className={styles.cart_total_header}>Общая сумма</h3>
      <span className={styles.cart_subtotal}>
        <p className={styles.cart_subtotal_title}>Подытог</p>
        <p className={styles.cart_subtotal_sum}>{total}</p>
      </span>
      <span className={styles.cart_total}>
        <p className={styles.cart_total_title}>Итог</p>
        <p className={styles.cart_total_sum}>{total}</p>
      </span>
      <button type="button" className={styles.cart_total_order}>
        Заказать
      </button>
    </div>
  );
}
