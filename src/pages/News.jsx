import React from "react";

const News = () => {
  return (
    <section className="pt-32 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Latest News</h1>
          <p className="text-lg text-gray-600 mt-2">
            Stay updated with the latest happenings at MSSN and around the
            school.
          </p>
        </header>

        {/* Featured Article */}
        <article className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="/path/to/featured-news.jpg"
            alt="Featured News"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              Featured Article Title
            </h2>
            <p className="text-gray-700 mb-4">
              A brief description of the featured news article that highlights
              key details and entices the reader to learn more.
            </p>
            <a
              href="#"
              className="inline-block text-primary font-semibold hover:underline"
            >
              Read More &rarr;
            </a>
          </div>
        </article>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/path/to/news-image-1.jpg"
              alt="News 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">News Headline 1</h3>
              <p className="text-gray-600 text-sm mb-2">
                A short summary of the news goes here...
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Read More
              </a>
            </div>
          </article>

          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/path/to/news-image-2.jpg"
              alt="News 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">News Headline 2</h3>
              <p className="text-gray-600 text-sm mb-2">
                A short summary of the news goes here...
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Read More
              </a>
            </div>
          </article>

          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/path/to/news-image-3.jpg"
              alt="News 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">News Headline 3</h3>
              <p className="text-gray-600 text-sm mb-2">
                A short summary of the news goes here...
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Read More
              </a>
            </div>
          </article>

          {/* Add more article cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default News;
