import { useEffect } from "react";
import type { JSX } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartByIdThunk } from "../../entities/cart/api/index";
import type { RootState, AppDispatch } from "../../app/store/store";

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

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!cart) {
    return <div>Корзина не найдена</div>;
  }

  return (
    <div>
      <h1>Корзина #{cart.id}</h1>
      <p>Статус: {cart.status}</p>
      <p>Товаров: {cart.items?.length || 0}</p>
      <p>Сумма: {cart.total} ₽</p>
    </div>
  );
}
