import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./main-layout.module.css";
import HeaderMobile from "components/HeaderMobile";

export default function MainLayout() {
  const isMobile = true;
  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}

      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
