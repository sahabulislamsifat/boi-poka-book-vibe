const Book = ({ book }) => {
  const { image, bookName, author, tags } = book;

  return (
    <div className="card border-slate-400 bg-base-100 w-96 shadow-xl p-6">
      <figure className="py-8 bg-blue-200 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-6">
          {tags.map((tag) => (
            <button className="btn btn-xs px-5 text-green-600 ">{tag}</button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
