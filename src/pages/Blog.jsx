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
        "https://images.unsplash.com/photo-1584286595398-a59087b06b23?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

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
