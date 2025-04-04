import React, { useState, useEffect } from 'react'
import { Calendar, User, Clock } from 'lucide-react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BlogAdmin = () => {
  const [showModal, setShowModal] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  // Individual state variables
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')  // Changed from 'blog' to 'content'
  const [summary, setSummary] = useState('')
  const [read_time, setRead_time] = useState(0)
  const [image_url, setImage_url] = useState('')

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs')
        setBlogs(response.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])  // Removed 'blogs' from dependencies to prevent infinite re-fetching

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('auth_token')
      await axios.post(
        'http://localhost:5000/api/blogs',
        {
          title,
          author,
          content,  // Changed from 'blog' to 'content'
          summary,
          image_url: image_url || null,  // Handle empty strings
          read_time: Number(read_time),  // Convert to number
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      // Refresh blogs list
      const response = await axios.get('http://localhost:5000/api/blogs')
      setBlogs(response.data)
      setShowModal(false)
      // Reset form fields
      setTitle('')
      setAuthor('')
      setContent('')
      setSummary('')
      setRead_time(0)
      setImage_url('')
      toast.success('Blog post added successfully!')
    } catch (error) {
      toast.error('Failed to add blog post. Please try again.')
      console.error('Error adding blog:', error)
    }
  }

  const deleteBlog = async (id) => {
    try {
      const token = localStorage.getItem('auth_token')
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setBlogs(blogs.filter((blog) => blog.id !== id))
      toast.success('Blog post deleted successfully!')
    } catch (error) {
      console.error('Error deleting blog:', error)
      toast.error(`Error: ${error.response?.data?.error || error.message}`)
    }
  }

  if (loading) {
    return (
      <div className="pt-32 pb-16 container text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading blog posts...</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary">Blogs</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Add Blog Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={
                blog.image_url ||
                'https://via.placeholder.com/500x300?text=Blog+Image'
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
                  {blog.read_time} min read
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
                  onClick={() => deleteBlog(blog.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">Add New Blog Post</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Title*</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Author*</label>
                <input
                  type="text"
                  name="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Summary (max 100 chars)*
                </label>
                <textarea
                  name="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  maxLength={100}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Blog Content*
                </label>
                <textarea
                  name="content"  // Changed from 'blog' to 'content'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-2 border rounded min-h-[200px]"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Approx read time (minutes)*
                </label>
                <input
                  type="number"
                  name="read_time"
                  value={read_time}
                  onChange={(e) => setRead_time(e.target.value)}
                  className="w-full p-2 border rounded"
                  min="1"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  value={image_url}
                  onChange={(e) => setImage_url(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg">
                  Add Blog Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogAdmin