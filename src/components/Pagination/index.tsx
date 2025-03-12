import { Link, useNavigate } from "react-router-dom";
import styles from "./pagination.module.css";

export default function Pagination({ total, limit }) {
  const navigate = useNavigate();

  function handlePageChange(i) {
    //const skip = i * pagination.limit
    const page = i + 1;
    //setPagination({...pagination, skip })
    navigate(`/page/${page}`);
  }

  function renderPagination() {
    //const total = pagination.total
    //const perPage = pagination.limit
    const pages = total / limit;
    return Array.from({ length: pages }).map((_, i) => (
      <button onClick={() => handlePageChange(i)}>{i + 1}</button>
    ));
  }
  return <section className={styles.container}>{renderPagination()}</section>;
}
