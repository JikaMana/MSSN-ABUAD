import React from "react";
import { Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Importance of Seeking Knowledge in Islam",
      excerpt:
        "Prophet Muhammad (peace be upon him) said, 'Seeking knowledge is obligatory upon every Muslim.' Let's explore what this means for us today.",
      author: "Ustadh Abdullah",
      date: "2024-03-10",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 2,
      title: "Preparing for Ramadan: A Comprehensive Guide",
      excerpt:
        "As we approach the blessed month of Ramadan, here are some practical tips to help you prepare spiritually and physically.",
      author: "Ustadh Ibrahim",
      date: "2024-03-08",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-4">
          We welcome your contributions! You can upload your blog post, subject
          to approval by the MSSN EXCO team. Please ensure that any quotations
          from hadith or the Qur'an include clear references to their sources.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Please format your submission as follows:
        </p>
        <ul className="list-decimal ml-6 text-lg text-gray-600 mb-2">
          <li>Your name</li>
          <li>Approximate time to read</li>
          <li>The content of the post</li>
          <li>Topic of the post</li>
          <li>Summary of the post (few words)</li>
          <li>Date</li>
        </ul>
        <p className="mb-8 text-xl">
          <strong>Note: </strong> Should be written on paper and submitted to
          the appropriate EXCO
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                </div>

                <button className="btn btn-primary mt-4">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
