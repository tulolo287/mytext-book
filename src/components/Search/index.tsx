import styles from "./search.module.css";

export default function Search({ setSearch }) {
  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
  }

  return (
    <div className={styles.search}>
      Search
      <input onChange={handleSearch} placeholder="Name" type="text" />
    </div>
  );
}
