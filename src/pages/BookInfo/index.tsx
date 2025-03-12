import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function BookInfo() {
  const [book, setBook] = useState();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    if (!location.state) {
      const { id } = params;
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
        });
    } else {
      const { book } = location.state;
      setBook(book);
    }
  }, []);

  return (
    <>
      {book ? (
        <section>
          <h1>{book.title}</h1>
          <img src={book.thumbnail} alt={book.title} />
        </section>
      ) : (
        "Loading..."
      )}
    </>
  );
}
