import React from "react";
import SingleBook from "./SingleBook";

const BooksList = (props) => {
  console.log(props);
  return props.horrorbook.map((book) => {
    return <SingleBook booklist={book} key={book.asin}></SingleBook>;
  });
};

export default BooksList;