import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";
import { addToStoredReadList2 } from "../../Utility/addToDb2";
const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    review,
    author,
    category,
    bookName,
    tags,
    yearOfPublishing,
    publisher,
    rating,
    totalPages,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleAddToWishList = (id2) => {
    addToStoredReadList2(id2);
  };

  return (
    <div className="my-12">
      <h2>book detail : {bookId}</h2>
      <div className="hero bg-base-200  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-36 lg:w-96" />
          <div className="space-y-5">
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="font-bold text-xl">By : {author}</p>
            <div className="badge badge-outline text-xl px-4 py-3">
              {category}
            </div>
            <p className="py-6">
              <span className="text-xl font-bold">Review:</span> {review}
            </p>
            <div className="flex gap-10">
              <h3 className="font-bold">Tags:</h3>
              {tags.map((tag, index) => (
                <button key={index} className="btn btn-xs px-5 text-green-500">
                  #{tag}
                </button>
              ))}
            </div>
            <section className="flex gap-28">
              <div>
                <p>Number of pages:</p>
                <p>Publisher:</p>
                <p>Year of Publishing: </p>
                <p>Ratting:</p>
              </div>
              <div className="font-bold">
                <p> {totalPages}</p>
                <p> {publisher}</p>
                <p>{yearOfPublishing}</p>
                <p> {rating}</p>
              </div>
            </section>
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline mr-4 btn-accent"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleAddToWishList(bookId)}
              className="btn btn-accent"
            >
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
