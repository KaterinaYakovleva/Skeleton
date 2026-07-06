import { useEffect } from "react";
import type { JSX } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCartThunk,
  fetchMyCartThunk,
} from "../../entities/cart/api/index";
import type { RootState, AppDispatch } from "../../app/store/store";
import type { ICartItem, ICartProduct } from "../../entities/cart/model";
import styles from "./CartPage.module.css";
import CartTotal from "../../widgets/CartTotal/CartTotal";

export function CartPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    currentCart: cart,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchMyCartThunk());
  }, [dispatch]);

  const handleDeleteCartItem = (itemId: number) => {
    dispatch(removeFromCartThunk(itemId));
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) {
    return <div className={styles.loader}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (!cart) {
    return <div className={styles.notFound}>Корзина не найдена</div>;
  }

  const cartItems = cart?.items || [];

  const getProduct = (item: ICartItem): ICartProduct => {
    return (item.Product || item.product || {}) as ICartProduct;
  };

  return (
    <div className={styles.container__cart}>
      <div className={styles.cart__bcg}>
        <img
          className={styles.cart__img__back}
          src="/icons/Rectangle_1.jpg"
          alt="Background"
        />
        <div className={styles.cart__bcg__content}>
          <h1 className={styles.cart__bcg__title}>Cart</h1>
          <div className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbs__link}>
              Home
            </Link>
            <span className={styles.breadcrumbs__separator}>›</span>
            <span className={styles.breadcrumbs__current}>Shop</span>
          </div>
        </div>
      </div>
      <div className={styles.cart__content__container}>
        {!cartItems || cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Корзина пуста</p>
            <Link to="/products" className={styles.continueShopping}>
              Продолжить покупки
            </Link>
          </div>
        ) : (
          <table className={styles.cart__table__container}>
            <thead className={styles.cart__table__mainheader}>
              <tr className={styles.cart__table__group__header}>
                <th className={styles.cart__table__header}>Товар</th>
                <th className={styles.cart__table__header}>Цена</th>
                <th className={styles.cart__table__header}>Количество</th>
                <th className={styles.cart__table__header}>Стоимость</th>
                <th className={styles.cart__table__header}></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: ICartItem) => {
                const product = getProduct(item);
                return (
                  <tr key={item.id}>
                    <td className={styles.cart__table__product}>
                      <div
                        className={styles.cart__product__info}
                        onClick={() => handleProductClick(item.productId)}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={product.imageUrl || "/placeholder.jpg"}
                          alt={product.name || "Товар"}
                          className={styles.cart__product__image}
                        />
                        <span>{product.name || "Товар"}</span>
                      </div>
                    </td>
                    <td className={styles.cart__table__price}>
                      {Number(item.price).toLocaleString()} ₽
                    </td>
                    <td className={styles.cart__table__quantity}>
                      {item.quantity}
                    </td>
                    <td className={styles.cart__table__total}>
                      {(Number(item.price) * item.quantity).toLocaleString()} ₽
                    </td>
                    <td className={styles.cart__table__delete}>
                      <button
                        className={styles.cart__table__delete_btn}
                        type="button"
                        title="Удалить товар"
                        onClick={() => handleDeleteCartItem(item.id)}
                      >
                        <img
                          className={styles.cart__table__delete_icon}
                          src="/icons/cart_delete.png"
                          alt="Удалить товар"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <CartTotal />
      </div>
    </div>
  );
}
