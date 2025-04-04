import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs`);
        const blogs = response.data;

        if (Array.isArray(blogs)) {
          const foundPost = blogs.find((blog) => blog.id === Number(id));
          setPost(foundPost || null);
        } else {
          console.error("Unexpected response format:", blogs);
        }
      } catch (error) {
        console.error("Error fetching the blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);
  console.log(post);

  if (loading) return <p className="text-center text-green-600">Loading...</p>;
  if (!post)
    return <p className="text-center text-red-600">Blog post not found.</p>;

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto mt-20">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-green-700 mb-6">{post.summary}</p>
          <div className="w-full h-">
            <img src={post.image_url} alt={post.title} />
          </div>
          <hr className="border-t-2 border-green-200 mb-6" />

          {/* Author Info */}
          <div className="flex justify-between items-center text-green-700">
            <div className="space-y-1">
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-green-600">MSSN 2024/25</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Alec Whitten</p>
              <p className="text-sm text-green-600">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <article className="prose prose-lg max-w-none text-green-900">
          <p className="mb-6">{post.blog}</p>
        </article>
      </div>
    </div>
  );
};

export default SingleBlogDetail;
