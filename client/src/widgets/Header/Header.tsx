import styles from "./Header.module.css";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src="/logo/logo.svg"></img>
      <nav className={styles.navigation__routes}>
        <NavLink className={styles.navigation__link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navigation__link} to="/products">
          Shop
        </NavLink>
        <NavLink className={styles.navigation__link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.navigation__link} to="/contact">
          Contact
        </NavLink>
      </nav>
      <div className="header-icons">
        <nav className={styles.navigation__icons}>
          <NavLink to="/account">
            <img
              className={styles.navigation__icon}
              src="/icons/account.png"
            ></img>
          </NavLink>
          <NavLink to="/search">
            <img
              className={styles.navigation__icon}
              src="/icons/search.png"
            ></img>
          </NavLink>
          <NavLink to="/favourites">
            <img
              className={styles.navigation__icon}
              src="/icons/heart.png"
            ></img>
          </NavLink>
          <NavLink to="/cart">
            <img
              className={styles.navigation__icon}
              src="/icons/cart.png"
            ></img>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
