import styles from "./catalog-item.module.css";

const CatalogItem = ({ item }) => {
  return (
    <div className={styles.catalog_item}>
      <img src={item.thumbnail} />
      <h3>{item.title}</h3>
    </div>
  );
};

export default CatalogItem;
