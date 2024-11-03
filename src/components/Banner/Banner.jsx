import bannerImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="w-3/4 text-center">
          <h1 className="text-4xl font-bold lg:w-3/4 mx-auto text-center ">
            Books To Freshen Up Your BookSelf
          </h1>
          <p className="py-6 lg:w-3/4">
            "The Midnight Library" by Matt Haig A thought-provoking novel about
            the power of choice and second chances, where the protagonist
            navigates between alternate versions of her life in a mystical
            library.
          </p>
          <div className="lg:w-3/4 text-center">
            <button className="btn px-10 bg-green-600 text-black">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
