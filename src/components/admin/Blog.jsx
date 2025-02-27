import React from "react";

const Blog = () => {
  return (
    <div className="p-6">
      {/* Header with "Add New Post" Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Blog Management</h2>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add New Post
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This section allows you to create and manage blog posts.
      </p>
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sample Blog Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Blog Post"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              The Beauty of Brotherhood
            </h3>
            <p className="text-gray-600 mb-2">
              An inspiring look into the bonds that unite our community.
            </p>
            <p className="text-gray-500 text-sm">Published on: 2024-04-01</p>
            <div className="mt-4 flex justify-end gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
        {/* Repeat blog cards or map your blog data */}
      </div>
    </div>
  );
};

export default Blog;
