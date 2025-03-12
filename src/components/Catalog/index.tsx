import Pagination from "components/Pagination";
import Search from "components/Search";
import { useDebounce } from "hooks/index";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatalogItem from "./CatalogItem";
import styles from "./catalog.module.css";

const CatalogMemo = memo(function Catalog() {
  const [data, setData] = useState();
  const params = useParams();
  const { pageNum } = params;
  const [query, setQuery] = useState({ search: "", total: 10, limit: 5 });
  const [search, setSearch] = useState("");
  const searchDebounce = useDebounce(search, 2000);

  const baseUrl = "https://dummyjson.com/products";

  useEffect(() => {
    let totalQuery = baseUrl;
    let skip = 0;
    if (pageNum) {
      skip = (pageNum - 1) * query.limit;
    }

    totalQuery = `${totalQuery}/search?q=${search}&limit=${query.limit}&skip=${skip}`;

    fetch(totalQuery)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setQuery({ ...query, total: data.total });
      });
  }, [pageNum, searchDebounce]);

  return (
    <>
      <Search setSearch={setSearch} />
      <article className={styles.catalog}>
        {data
          ? data?.map((item) => <CatalogItem book={item} />)
          : "Loading ..."}
      </article>
      <Pagination total={query.total} limit={query.limit} />
    </>
  );
});

export default CatalogMemo;
