import type { IProduct } from "../../model";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: IProduct;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

export function ProductCard({ product, onDelete, onView }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.product__name}>{product.name}</h3>
        <p className={styles.product__description}>{product.description}</p>
        <div className={styles.product__info}>
          <span>Остаток: {product.stock} шт.</span>
          <span>{product.isAvailable ? "В наличии" : "Нет в наличии"}</span>
        </div>

        <div className={styles.buttons}>
          {onView && (
            <button onClick={() => onView(product.id)}>Подробнее</button>
          )}

          {onDelete && (
            <button onClick={() => onDelete(product.id)}>Удалить</button>
          )}
        </div>
      </div>
    </div>
  );
}
