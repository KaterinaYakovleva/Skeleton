import type { IProduct } from "../../model";
import styles from "./ProductDetails.module.css";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../../cart/api";
import type { AppDispatch } from "../../../../app/store/store";

export function ProductInfo({ product }: { product: IProduct }) {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const CART_ID = 1;
    dispatch(
      addToCartThunk({
        cartId: CART_ID,
        productId: product.id,
        quantity: 1,
      }),
    )
      .unwrap()
      // .then((response) => {
      //   // Можно добавить уведомление или тост
      //   // toast.success("Товар добавлен в корзину!");
      // })
      .catch((error) => {
        console.error("Ошибка добавления в корзину:", error);
        // Можно показать ошибку
        // toast.error("Не удалось добавить товар");
      });
  };
  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>
      <p className={styles.price}>Rs. {product.price}</p>
      <div className={styles.rating}>★★★★★ 5 Customer Reviews</div>
      <p className={styles.description}>{product.description}</p>

      <div className={styles.options}>
        <div className={styles.size}>
          <span>Size</span>
          <button>XL</button>
          <button>XS</button>
        </div>
        <div className={styles.color}>
          <span>Color</span>
          <button className={styles.colorBlack} />
          <button className={styles.colorBrown} />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.addToCart} onClick={handleAddToCartClick}>
          Добавить в корзину
        </button>
        <button className={styles.compare}>Сравнить</button>
      </div>

      <div className={styles.meta}>
        <p>
          <strong>SKU</strong> : S{product.id}
        </p>
        <p>
          <strong>Category</strong> : {product.categoryId || "Sofas"}
        </p>
        <p>
          <strong>Tags</strong> : Sofa, Chair, Home, Shop
        </p>
        <div className={styles.share}>
          <strong>Share</strong>
          <svg>...</svg>
        </div>
      </div>
    </div>
  );
}
