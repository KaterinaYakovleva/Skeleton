import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/store/store";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

interface ProductListProps {
  onViewProduct: (id: number) => void;
  onDeleteProduct?: (id: number) => void;
}

export function ProductList({
  onViewProduct,
  onDeleteProduct,
}: ProductListProps) {
  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.product,
  );

  if (isLoading) {
    return <div className={styles.loader}>Загрузка товаров...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (!products.length) {
    return <div className={styles.empty}>Товары не найдены</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={onViewProduct}
            onDelete={onDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}
