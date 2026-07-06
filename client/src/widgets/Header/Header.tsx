import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";

export default function Header() {
  const { currentCart: cart } = useSelector((state: RootState) => state.cart);

  const cartCount =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src="/logo/logo.svg" alt="Logo" />
      <nav className={styles.navigation__routes}>
        <NavLink className={styles.navigation__link} to="/">
          Главная
        </NavLink>
        <NavLink className={styles.navigation__link} to="/products">
          Каталог
        </NavLink>
        <NavLink className={styles.navigation__link} to="/about">
          О нас
        </NavLink>
        <NavLink className={styles.navigation__link} to="/contact">
          Контакты
        </NavLink>
      </nav>
      <div className="header-icons">
        <nav className={styles.navigation__icons}>
          <NavLink to="/account">
            <img
              className={styles.navigation__icon}
              src="/icons/account.png"
              alt="Account"
            />
          </NavLink>
          <NavLink to="/search">
            <img
              className={styles.navigation__icon}
              src="/icons/search.png"
              alt="Search"
            />
          </NavLink>
          <NavLink to="/favourites">
            <img
              className={styles.navigation__icon}
              src="/icons/heart.png"
              alt="Favourites"
            />
          </NavLink>
          <NavLink to="/cart" className={styles.cart__link}>
            <div className={styles.cart__icon__wrapper}>
              <img
                className={styles.navigation__icon}
                src="/icons/cart.png"
                alt="Cart"
              />
              {cartCount > 0 && (
                <span className={styles.cart__badge}>{cartCount}</span>
              )}
            </div>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
