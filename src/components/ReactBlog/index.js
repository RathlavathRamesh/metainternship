import './index.css'

const BlogPostList = props => {
  console.log('Hii This Is blogList Component')

  const viewFullPost = postId => {
    alert(`Viewing full post with ID ${postId}`)
  }
  const {BlogsPost} = props
  console.log(BlogsPost)
  return (
    <div className="blog-post-list-container">
      <h1>Blog Posts</h1>
      {BlogsPost.map(post => (
        <div key={post.post_id} className="blog-post">
          <h2>{post.title}</h2>
          <p>content: {post.content}</p>
          <button onClick={() => viewFullPost(post.id)}>View Full Post</button>
        </div>
      ))}
    </div>
  )
}

export default BlogPostList
