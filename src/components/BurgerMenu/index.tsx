import { useState } from "react";
import styles from "./burger-menu.module.css";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div
        className={`${styles.burgerBtn} ${isOpen && styles.burgerRotate}`}
        onClick={handleMenu}
      >
        <div className={styles.upLine}></div>
        <div className={styles.middleLine}></div>
        <div className={styles.bottomLine}></div>
      </div>
      <div className={`${styles.burgerMenu} ${isOpen && styles.show}`}>
        <div className={styles.links}>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  );
}
