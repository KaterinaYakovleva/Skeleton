import type { IProduct } from "../../model";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../../../app/store/store";
import { addToCartThunk } from "../../../cart/api";
import {
  addToFavouritesThunk,
  removeFromFavouritesThunk,
} from "../../../favourites/index";
import { useSelector } from "react-redux";
import type { IFavourite } from "../../../favourites/index";
import styles from "./ProductCard.module.css";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface ProductCardProps {
  product: IProduct;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

export function ProductCard({ product, onDelete, onView }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { favourites } = useSelector((state: RootState) => state.favourites);
  // const { currentCart, isLoading } = useSelector(
  //   (state: RootState) => state.cart,
  // );
  const handleCardClick = () => {
    if (onView) {
      onView(product.id);
    }
  };

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
      .then((response) => {
        console.log("Товар добавлен в корзину:", response);
        // Можно добавить уведомление или тост
        // toast.success("Товар добавлен в корзину!");
      })
      .catch((error) => {
        console.error("Ошибка добавления в корзину:", error);
        // Можно показать ошибку
        // toast.error("Не удалось добавить товар");
      });
  };

  const isFavourite = favourites.some(
    (fav: IFavourite) => fav.productId === product.id,
  );

  const handleToggleFavourite = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isFavourite) {
      const favorite = favourites.find(
        (fav: IFavourite) => fav.productId === product.id,
      );
      if (favorite) {
        dispatch(removeFromFavouritesThunk(favorite.id));
      }
    } else {
      dispatch(addToFavouritesThunk({ productId: product.id }));
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />

      <div className={styles.overlay}>
        <button className={styles.addToCartBtn} onClick={handleAddToCartClick}>
          Добавить в корзину
        </button>

        <div className={styles.actions}>
          <button
            className={styles.actionBtn}
            onClick={(e) => {
              e.stopPropagation();
              console.log("Share:", product.id);
            }}
          >
            <ShareIcon />
            Поделиться
          </button>

          <button
            className={styles.actionBtn}
            onClick={(e) => {
              e.stopPropagation();
              console.log("Compare:", product.id);
            }}
          >
            <CompareArrowsIcon />
            Сравнить
          </button>

          <button className={styles.actionBtn} onClick={handleToggleFavourite}>
            <FavouriteBorderIcon /> {isFavourite ? "В избранном" : "В избранное"}
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.product__name}>{product.name}</h3>
        <p className={styles.product__description}>{product.description}</p>
        <div className={styles.product__info}>
          <span>Остаток: {product.stock} шт.</span>
          <span>{product.isAvailable ? "В наличии" : "Нет в наличии"}</span>
        </div>

        {onDelete && (
          <button onClick={() => onDelete(product.id)}>Удалить</button>
        )}
      </div>
    </div>
  );
}
