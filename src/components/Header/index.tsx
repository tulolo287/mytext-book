import BurgerMenu from "components/BurgerMenu";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/">Logo</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
