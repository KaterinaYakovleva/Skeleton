import type { IProduct } from "../../model";
import styles from "./ProductDetails.module.css";

export function ProductInfo({ product }: { product: IProduct }) {
  console.log(product.price)
  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>
      <p className={styles.price}>Rs. {product.price || "2.500.000"}</p>
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
        <button className={styles.addToCart}>Add To Cart</button>
        <button className={styles.compare}>+ Compare</button>
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
