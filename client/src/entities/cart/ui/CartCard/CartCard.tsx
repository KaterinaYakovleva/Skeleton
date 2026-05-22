import type { ICart } from "../../model";
import styles from "./CartCard.module.css";

interface CartCardProps {
  cart: ICart;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

export function CartCard({ cart, onDelete, onView }: CartCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.id}>Корзина #{cart.id}</span>
        <span className={`${styles.status} ${styles[cart.status]}`}>
          {cart.status === "active"
            ? "Активна"
            : cart.status === "ordered"
              ? "Оформлена"
              : "Брошена"}
        </span>
      </div>

      <div className={styles.info}>
        <p>Пользователь ID: {cart.userId}</p>
        <p>Товаров: {cart.items?.length || 0}</p>
        <p>Общая сумма: {cart.total || 0} ₽</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.date}>
          Создана: {new Date(cart.createdAt).toLocaleDateString()}
        </span>
        <div className={styles.buttons}>
          {onView && (
            <button className={styles.viewBtn} onClick={() => onView(cart.id)}>
              Просмотр
            </button>
          )}
          {onDelete && (
            <button
              className={styles.deleteBtn}
              onClick={() => onDelete(cart.id)}
            >
              Удалить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
