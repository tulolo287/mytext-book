import { Link } from "react-router-dom";
import styles from "./catalog-item.module.css";

const CatalogItem = ({ book }) => {
  return (
    <div className={styles.catalog_item}>
      <Link to={`/book/${book.id}`} state={{ book }}>
        <img src={book.thumbnail} />
        <h3>{book.title}</h3>
      </Link>
      <button>Add to cart</button>
    </div>
  );
};

export default CatalogItem;
