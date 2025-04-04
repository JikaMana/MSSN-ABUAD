import React, { useState, useEffect } from 'react'
import { Calendar, User, Clock } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs')
        setPosts(response.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])
  console.log(posts)

  if (loading) {
    return (
      <div className="pt-32 pb-16 container text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4">Loading blog posts...</p>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">
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
              className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={
                  post.image_url ||
                  'https://via.placeholder.com/500x300?text=Blog+Image'
                }
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime || '5 min'} read
                  </div>
                </div>

                <div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary hover:text-primary-dark font-medium mt-2">
                    Read Now
                    <span className="text-xl">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No blog posts available yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
