Create a React.js functional component that displays a list of blog
posts. Each post should show the title, author, and a button to view the
full post.


//ccbp start RJSCPFTHY7

import './App.css'
import BlogPostList from './components/BlogReact'

const postsArray = [
  {
    post_id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
  },
  {
    post_id: 2,
    title: 'Second Post',
    content: 'Another post by John Doe.',
  },
  {
    post_id: 3,
    title: 'Travel Adventure',
    content: 'Exploring new places is always exciting!',
  },
  {
    post_id: 4,
    title: 'Tech News',
    content: 'Latest updates from the tech world.',
  },
]

const App = () => <h1>Welcome to this component </h1>

export default App

import './BlogPostList.css'

const BlogPostList = () => {
  console.log('Hii This Is blogList Component')

  return (
    <div>
      <h1>Hii This Is Block Component</h1>
    </div>
  )
}

export default BlogPostList


