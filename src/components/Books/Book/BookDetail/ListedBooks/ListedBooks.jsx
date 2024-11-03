import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../../../Utility/addToDb";
import Book from "../../Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  // Ideally we will directly get the read book list from the database.

  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // Worst way
    console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "No of Pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }
    if (sortType === 'Ratings') {
      const sortedReadList = [...readList].sort(
        (a, b) => a.ratings - b.ratings
      );
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : " Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
          <li>
            <a onClick={() => handleSort("No of Pages")}>No of Pages</a>
          </li>
        </ul>
      </div>
      <h3 className="text-center text-3xl">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List {readList.length}</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish Read</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
