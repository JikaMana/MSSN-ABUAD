import React, { useState, useEffect } from "react";
import { Calendar, User, Clock } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    blog: "",
    summary: "",
    image_url: "",
  });

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://mssn-abuad.onrender.com/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [blogs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("auth_token");
      await axios.post("https://mssn-abuad.onrender.com/api/blogs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Refresh blogs list
      const response = await axios.get(
        "https://mssn-abuad.onrender.com/api/blogs"
      );
      setBlogs(response.data);
      setShowModal(false);
      setFormData({
        title: "",
        author: "",
        blog: "",
        summary: "",
        image_url: "",
      });
    } catch (error) {
      toast.error(`${error.response?.data?.error || error.message}`);
      console.error("Error adding blog:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const token = localStorage.getItem("auth_token");
      await axios.delete(`https://mssn-abuad.onrender.com/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 container text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Blogs</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Add New Blog Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={
                blog.image_url ||
                "https://via.placeholder.com/500x300?text=Blog+Image"
              }
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-2">{blog.summary}</p>
              <div className="flex items-center gap-1">
                <User size={16} />
                {blog.author}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date().toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {/* {blog.readTime} */}5 min read
                </div>
              </div>{" "}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
                  onClick={() => deleteBlog(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">Add New Blog Post</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Author*</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Summary (max 500 chars)*
                  </label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    maxLength={500}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Blog Content*
                  </label>
                  <textarea
                    name="blog"
                    value={formData.blog}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded min-h-[200px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Approx read time*
                  </label>
                  <label className="block text-gray-700 mb-1">
                    Approx read time*
                  </label>
                  <input
                    type="number"
                    name="read-time"
                    // value={formData.author}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Image URL</label>
                  <input
                    type="text"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Add Blog Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;
