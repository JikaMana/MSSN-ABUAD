import React, { useState } from "react";

const Blog = () => {
  const [ourBlogs, setOurBlogs] = useState([
    {
      id: 1,
      title: "The Beauty of Brotherhood",
      excerpt: "An inspiring look into the bonds that unite our community.",
      date: "2024-04-01",
      image: "https://via.placeholder.com/500x300?text=Blog+1",
    },
    {
      id: 2,
      title: "Embracing Islamic Education",
      excerpt:
        "Exploring how modern education blends with timeless Islamic values.",
      date: "2024-04-05",
      image: "https://via.placeholder.com/500x300?text=Blog+2",
    },
    {
      id: 3,
      title: "Community Outreach Initiatives",
      excerpt: "How MSSN ABUAD is making a difference in the local community.",
      date: "2024-04-10",
      image: "https://via.placeholder.com/500x300?text=Blog+3",
    },
    {
      id: 4,
      title: "The Role of Youth in Islamic Renewal",
      excerpt:
        "An examination of youth engagement and leadership in the Muslim community.",
      date: "2024-04-12",
      image: "https://via.placeholder.com/500x300?text=Blog+4",
    },
  ]);

  const deleteItem = (blogID) => {
    setOurBlogs(ourBlogs.filter((blogs) => blogs.id !== blogID));
  };
  console.log(ourBlogs);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Blog Management</h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add New Blog Post
        </button>
      </div>
      <p className="text-gray-600 mb-4">Manage your blog posts below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ourBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-2">{blog.excerpt}</p>
              <p className="text-gray-500 text-sm">Published on: {blog.date}</p>
              <div className="mt-4 flex justify-end gap-2">
                {/* <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded">
                  Edit
                </button> */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
                  onClick={() => deleteItem(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
