import { useNavigate } from "react-router-dom";
import styles from "./pagination.module.css";

export default function Pagination({ total, limit }) {
  const navigate = useNavigate();
  const paginationLimit = 5;

  function handlePageChange(i) {
    const page = i + 1;
    navigate(`/page/${page}`);
  }

  function renderPagination() {
    const pages = total / limit;
    return (
      <>
        <button>prev</button>
        {Array.from({ length: pages }).map((_, i) => {
          if (i > paginationLimit) {
            return "...";
          }
          return (
            <button key={i} onClick={() => handlePageChange(i)}>
              {i + 1}
            </button>
          );
        })}
        <button>next</button>
      </>
    );
  }
  return <section className={styles.container}>{renderPagination()}</section>;
}
