import './App.css'
import BlogPostList from './components/ReactBlog'

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

const App = () => <BlogPostList items={postsArray} />

export default App
