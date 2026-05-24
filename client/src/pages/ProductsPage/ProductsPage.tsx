// client/src/pages/ProductsPage/ProductsPage.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import type { RootState, AppDispatch } from "../../app/store/store";
import { fetchProductsThunk } from "../../entities/product/api";
import { ProductCard } from "../../entities/product/ui/ProductCard/ProductCard";

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
    <div style={{ padding: "20px" }}>
      <h1>Товары</h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleViewProduct}
          />
        ))}
      </div>
    </div>
  );
}
