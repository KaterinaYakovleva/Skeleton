// client/src/pages/ProductPage/ProductPage.tsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store/store";
import { fetchProductByIdThunk } from "../../entities/product/api";
import { ProductCard } from "../../entities/product/ui/ProductCard/ProductCard";
import styles from "./ProductPage.module.css";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { currentProduct, isLoading, error } = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdThunk(Number(id)));
    }
  }, [id, dispatch]);

  const handleBack = () => navigate(-1);

  if (isLoading) {
    return <div className={styles.loader}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (!currentProduct) {
    return <div className={styles.notFound}>Товар не найден</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button onClick={handleBack} className={styles.backButton}>
          ← Назад
        </button>
      </div>

      <ProductCard
        product={currentProduct}
        onView={undefined}
        onDelete={undefined}
      />
    </div>
  );
}
