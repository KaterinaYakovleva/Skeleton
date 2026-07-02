import type { IProduct } from "../../model";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductTabs } from "./ProductTabs";
import styles from "./ProductDetails.module.css";

interface ProductDetailsProps {
  product: IProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className={styles.details}>
      <div className={styles.container}>
        <ProductGallery images={[product.imageUrl]} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
    </div>
  );
}
