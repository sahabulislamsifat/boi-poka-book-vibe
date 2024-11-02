import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;

  return (
    <Link to={`books/${bookId}`}>
      <div className="card border-slate-400 bg-base-100 w-96 shadow-xl p-6">
        <figure className="py-8 bg-blue-200 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs px-5 bg-blue-500 text-black"
              >
                {tag}
              </button>
            ))}
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
