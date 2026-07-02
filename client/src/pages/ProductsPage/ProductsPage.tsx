import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import type { AppDispatch } from "../../app/store/store";
import { fetchProductsThunk } from "../../entities/product/api";
import { ProductList } from "../../entities/product/ui/ProductList/ProductList";
import styles from "./ProductsPage.module.css";

export function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const handleViewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.products__page}>
      <div className={styles.products__bcg}>
        <img
          className={styles.products__img__back}
          src="/icons/Rectangle_1.jpg"
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

      <ProductList onViewProduct={handleViewProduct} />
    </div>
  );
}
