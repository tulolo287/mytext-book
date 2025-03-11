import styles from "./pagination.module.css"

export default function Pagination({ }) {

  function renderPagination() {
    const total = 100
    const perPage = 5
    const pages = total / perPage
    return Array.from({ length: pages }).map((_, idx) => <button>{idx + 1}</button>)
  }
  return (
    <section className={styles.container}>
      {renderPagination()}
    </section>
    
  )
}