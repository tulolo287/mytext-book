import BurgerMenu from "components/BurgerMenu";
import styles from "./header-mobile.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function HeaderMobile() {
  const isMobie = false

  return (
   <div className={styles.container}>
      <BurgerMenu />
   </div>
    )
}
