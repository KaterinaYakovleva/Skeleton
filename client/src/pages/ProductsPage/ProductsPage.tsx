// client/src/pages/ProductsPage/ProductsPage.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import type { RootState, AppDispatch } from "../../app/store/store";
import { fetchProductsThunk } from "../../entities/product/api";
import { ProductCard } from "../../entities/product/ui/ProductCard/ProductCard";
import styles from "./ProductsPage.module.css";

export function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const handleViewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  if (isLoading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Загрузка товаров...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
        Ошибка: {error}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Нет доступных товаров
      </div>
    );
  }

  return (
    <div className={styles.products__page}>
      <div className={styles.products__bcg}>
        <img
          className={styles.products__img__back}
          src="/header_icons/Rectangle_1.jpg"
          alt="Background"
        />
        <div className={styles.products__bcg__content}>
          <h1 className={styles.products__bcg__title}>Shop</h1>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbs__link}>
              Home
            </Link>
            <span className={styles.breadcrumbs__separator}>›</span>
            <span className={styles.breadcrumbs__current}>Shop</span>
          </div>
        </div>
      </div>
      <div className={styles.products__container}>
        <div className={styles.general}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={handleViewProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}