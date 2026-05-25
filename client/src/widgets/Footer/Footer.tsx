import styles from "./Footer.module.css";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__info}>
        <div className={styles.column1}>
          <h3 className={styles.footer__header}>Furnio</h3>
          <span className={styles.column1__span1}>Адрес</span>
        </div>
        <div className={styles.column2}>
          <h5 className={styles.footer__links}>Links</h5>
          <NavLink to="/" className={styles.footer__navigation__link}>
            Home
          </NavLink>
          <NavLink to="/products" className={styles.footer__navigation__link}>
            Shop
          </NavLink>
          <NavLink to="/" className={styles.footer__navigation__link}>
            About
          </NavLink>
          <NavLink to="/" className={styles.footer__navigation__link}>
            Contact
          </NavLink>
        </div>
        <div className={styles.column3}>
          <h5 className={styles.footer__links}>Help</h5>
          <NavLink to="/" className={styles.footer__navigation__link}>
            Payment
          </NavLink>
          <NavLink to="/" className={styles.footer__navigation__link}>
            Returns
          </NavLink>
          <NavLink to="/" className={styles.footer__navigation__link}>
            Privacy Policies
          </NavLink>
        </div>
        <div className={styles.column4}>
          <h5 className={styles.footer__news}>Newsletter</h5>
          <span className={styles.footer__navigation__subs}>Enter</span>
        </div>
      </div>
    </div>
  );
}
