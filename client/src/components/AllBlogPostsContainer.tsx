import { blogPosts } from "../api/TempDB"
import BlogPost from "./BlogPost"
import { Link } from "react-router-dom"
import {useState} from 'react'
import { blogPostProps } from "./Types"

const AllBlogPostsContainer = () => {
  const [posts, setPosts] = useState<blogPostProps[]>(blogPosts)

  const handleDelete = (id: number) => {
    //TODO: api call logic here
    const filteredPosts = posts.filter(post => post.id !== id)
    setPosts(filteredPosts)
  }

  return (
    <>
      {posts.map(
        (post) => {
          return(
            <>
              <BlogPost
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                body={post.body}
                category={post.category}
                author={post.author}
              />
              <br/>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </>
          )
        }
      )}
    <br/>
    <br/>
    <Link to={`/create`}>Create a New Blog Post</Link>
    </>
  )
}

export default AllBlogPostsContainer