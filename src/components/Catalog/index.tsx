import { useEffect, useState } from "react";
import CatalogItem from "./CatalogItem";
import styles from "./catalog.module.css";

export default function Catalog() {
  const [data, setData] = useState<void>();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <article className={styles.catalog}>
      {data ? data?.map((item) => <CatalogItem item={item} />) : "Loading ..."}
    </article>
  );
}
