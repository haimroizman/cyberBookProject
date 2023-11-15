import React, { useState, useMemo } from "react";
import classes from "./AvailableBooks.module.css";
import Card from "../UI/Card";
import BookItem from "./BookItem/BookItem";
import UserSignupForm from "../Cart/UserSignupForm";
import useHttp from "../../hooks/use-http";
import Button from "../UI/Button";
import useAppStore from "../../hooks/use-app-store";

const AvailableBooksWrapper = () => {
  return (
    <section className={classes.books}>
      <AvailableBooks />
    </section>
  );
};

const AvailableBooks = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const searchTerm = useAppStore((state) => state.searchTerm);

  const [showUserSignupForm, setShowUserSignupForm] = useState(false);

  const requestConfig = useMemo(
    () => ({
      url: `https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=${pageSize}&startIndex=${
        pageNumber * pageSize
      }`,
      method: "GET",
    }),
    [pageSize, pageNumber]
  );

  const { isLoading, error, data } = useHttp(requestConfig);

  if (isLoading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-400">{error}</p>;
  }

  if (!data?.items) {
    return <p className="text-center text-2xl">No books found.</p>;
  }

  const filteredData = data.items.filter((bookData) => {
    if (!searchTerm) return true;

    return bookData.volumeInfo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  if (filteredData.length === 0) {
    return <p className="text-center text-2xl">No books found.</p>;
  }

  console.log(data);

  return (
    <div>
      <div className="flex justify-between">
        <select
          className="bg-white border border-gray-300 rounded p-2 mr-2"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <div className="space-x-4">
          <Button
            label="Previous"
            disabled={pageNumber === 0}
            onClick={() => setPageNumber(pageNumber - 1)}
          />
          <Button label="Next" onClick={() => setPageNumber(pageNumber + 1)} />
        </div>
      </div>
      <Card>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredData.map((bookData) => (
            <BookItem
              key={bookData.id}
              id={bookData.id}
              title={bookData.volumeInfo.title}
              firstImg={bookData.volumeInfo.imageLinks?.thumbnail}
              onHandleImageClick={() => {
                setShowUserSignupForm(true);
              }}
            />
          ))}
        </ul>
      </Card>
      {showUserSignupForm && (
        <UserSignupForm onClose={() => setShowUserSignupForm(false)} />
      )}
    </div>
  );
};

export default AvailableBooksWrapper;
