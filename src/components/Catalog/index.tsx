import Filter from "components/Filter";
import Pagination from "components/Pagination";
import Search from "components/Search";
import { useDebounce } from "hooks/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CatalogItem from "./CatalogItem";
import styles from "./catalog.module.css";

export default function Catalog() {
  const [data, setData] = useState();
  const params = useParams();
  const { pageNum } = params;
  const [query, setQuery] = useState({ search: "", total: 10, limit: 5 });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const searchDebounce = useDebounce(search, 2000);

  const baseUrl = "https://dummyjson.com/products";

  useEffect(() => {
    let totalQuery = baseUrl;
    let skip = 0;
    let categories = "";
    if (pageNum) {
      skip = (pageNum - 1) * query.limit;
    }
    console.log(filter)
    if (filter.length > 0) {
      categories = `/category/${filter[filter.length-1].name}`;
      totalQuery = `${totalQuery}${categories}?limit=${query.limit}&skip=${skip}`;
    } else {
      totalQuery = `${totalQuery}/search?q=${search}&limit=${query.limit}&skip=${skip}`;
    }

    fetch(totalQuery)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setQuery({ ...query, total: data.total });
      });
  }, [pageNum, searchDebounce, filter]);

  return (
    <>
      <Search setSearch={setSearch} />
      {data ? (
        <>
          <Filter setFilter={setFilter} />
          <article className={styles.catalog}>
            {data?.map((item) => <CatalogItem key={item.id} book={item} />)}
          </article>
          <Pagination total={query.total} limit={query.limit} />
        </>
      ) : (
        "Loading ..."
      )}
    </>
  );
}
