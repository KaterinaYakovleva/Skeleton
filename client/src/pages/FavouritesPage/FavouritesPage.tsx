import { useEffect } from "react";
import type { JSX } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyFavouritesThunk,
  removeFromFavouritesThunk,
} from "../../entities/favourites/index";
import type { RootState, AppDispatch } from "../../app/store/store";
import styles from "./FavouritesPage.module.css";

export default function FavouritesPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { favourites, isLoading, error } = useSelector(
    (state: RootState) => state.favourites,
  );

  useEffect(() => {
    dispatch(fetchMyFavouritesThunk());
  }, [dispatch]);

  const handleRemoveFavourite = (favouriteId: number) => {
    dispatch(removeFromFavouritesThunk(favouriteId));
  };

  if (isLoading) {
    return <div className={styles.loader}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Избранное</h1>
        <p>{favourites.length} товаров</p>
      </div>

      {favourites.length === 0 ? (
        <div className={styles.empty}>
          <p>У вас пока нет избранных товаров</p>
          <Link to="/products" className={styles.continueShopping}>
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {favourites.map((fav) => (
            <div key={fav.id} className={styles.card}>
              <Link to={`/product/${fav.productId}`}>
                <img
                  src={fav.Product?.imageUrl || "/placeholder.jpg"}
                  alt={fav.Product?.name || "Товар"}
                  className={styles.image}
                />
                <h3>{fav.Product?.name || "Товар"}</h3>
                <p>{fav.Product?.price?.toLocaleString()} ₽</p>
              </Link>
              <button
                className={styles.removeBtn}
                onClick={() => handleRemoveFavourite(fav.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
