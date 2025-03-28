import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch news from backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://mssn-abuad.onrender.com/api/news"
        );
        if (response.data.length > 0) {
          setNews(response.data);
          // Set first news item as featured
          setFeaturedNews(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  if (loading) {
    return (
      <div className="pt-32 pb-16 container text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading News...</p>
      </div>
    );
  }

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
        {featuredNews && (
          <article className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
            {featuredNews.image_url && (
              <img
                src={featuredNews.image_url}
                alt={featuredNews.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {featuredNews.title}
              </h2>
              <p className="text-gray-700 mb-4">{featuredNews.summary}</p>
              <p className="text-gray-600 text-sm mb-2">
                By {featuredNews.author}
              </p>
              <button className="inline-block text-primary font-semibold hover:underline">
                Read More &rarr;
              </button>
            </div>
          </article>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((newsItem) => (
            <article
              key={newsItem.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {newsItem.image_url && (
                <img
                  src={newsItem.image_url}
                  alt={newsItem.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{newsItem.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{newsItem.summary}</p>
                <p className="text-gray-500 text-xs mb-2">
                  By {newsItem.author}
                </p>
                <button className="text-primary font-medium hover:underline">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
