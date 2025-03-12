import { Fragment, useEffect, useState } from "react";
import styles from "./filter.module.css";

export default function Filter({ setFilter }) {
  const baseUrl = "https://dummyjson.com/products";
  const [categories, setCategories] = useState();
  const [categoryIsChecked, setCategoryIsChecked] = useState();

  useEffect(() => {
    fetch(`${baseUrl}/category-list`)
      .then((response) => response.json())
      .then((data) => {
        const categoriesData = data.map((item) => ({
          name: item,
          checked: false,
        }));
        setCategories(categoriesData);
      });
  }, []);

  const onCategoryCheck = (i) => {
    const categoriesCopy = [...categories];
    categoriesCopy[i].checked = !categoriesCopy[i].checked;
    setFilter(categoriesCopy.filter((item) => item.checked === true));
    setCategories(categoriesCopy);
  };

  return (
    <div className={styles.filter}>
      {categories
        ? categories.map((item, i) => (
            <Fragment key={item.name}>
              <label htmlFor={item.name}>{item.name}</label>
              <input
                onChange={() => onCategoryCheck(i)}
                name={item.name}
                type="checkbox"
                checked={item.checked}
              />
            </Fragment>
          ))
        : "Loading..."}
    </div>
  );
}
