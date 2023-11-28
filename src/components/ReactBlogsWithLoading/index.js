import React, {useState, useEffect} from 'react'

import './index.css'

const BlogPostListWithLoading = props => {
  const {BlogsPost} = props
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBlogPosts = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    setBlogPosts(BlogsPost)
    setLoading(false)
  }

  // Use useEffect to fetch blog posts when the component mounts
  useEffect(() => {
    fetchBlogPosts()
  }, []) // Empty dependency array ensures that this effect runs only once when the component mounts

  // Dummy function to simulate viewing the full post
  const viewFullPost = postId => {
    alert(`Viewing full post with ID ${postId}`)
  }

  return (
    <div className="blog-post-list-container">
      <h1 className="blog-title">Blog Posts</h1>

      {/* Show loading indicator if posts are being fetched */}
      {loading && <p className="loading-indicator">Loading...</p>}

      {/* Display blog posts if not loading */}
      {!loading &&
        blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <button onClick={() => viewFullPost(post.id)}>
              View Full Post
            </button>
          </div>
        ))}
    </div>
  )
}

export default BlogPostListWithLoading
