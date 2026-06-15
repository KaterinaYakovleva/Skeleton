/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import type { JSX } from "react";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartByIdThunk,
  removeFromCartThunk,
} from "../../entities/cart/api/index";
import type { RootState, AppDispatch } from "../../app/store/store";
import styles from "./CartPage.module.css";
import CartTotal from "../../widgets/CartTotal/CartTotal";

export function CartPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const {
    currentCart: cart,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(fetchCartByIdThunk(Number(id)));
    }
  }, [id, dispatch]);

  const handleDeleteCartItem = (itemId: number) => {
    dispatch(removeFromCartThunk(itemId));
  };

  // if (isLoading) {
  //   return <div>Загрузка...</div>;
  // }

  // if (error) {
  //   return <div>Ошибка: {error}</div>;
  // }

  // if (!cart) {
  //   return <div>Корзина не найдена</div>;
  // }

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
            {cart?.items.map((item) => (
              <tr key={item.id}>
                <td className={styles.cart__table__product}>
                  <div className={styles.cart__product__info}>
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className={styles.cart__product__image}
                    />
                    <span>{item.product.title}</span>
                  </div>
                </td>
                <td className={styles.cart__table__price}>
                  {item.price.toLocaleString()} ₽
                </td>
                <td className={styles.cart__table__quantity}>
                  {item.quantity}
                </td>
                <td className={styles.cart__table__total}>
                  {(item.price * item.quantity).toLocaleString()} ₽
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
                      src="./icons/cart_delete.png"
                      alt="Удалить товар"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CartTotal />
      </div>
    </div>
  );
}
