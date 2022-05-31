import {useEffect, useState} from 'react'
import { blogPosts } from '../api/TempDB'
import { blogPostProps } from './Types'
import BlogPost from './BlogPost'
import { useParams } from "react-router-dom";

//make a call to API

const BlogPostContainer = () => {
  const [blogPost, setBlogPost] = useState<blogPostProps | null>(null)

  const params = useParams()

  useEffect(() => {
    if (params.id) {
      const id = parseInt(params.id)
      setBlogPost(blogPosts[id-1])
      }
  }, [])

  return (
    <>
      {blogPost && <BlogPost
      key={blogPost.id}
      id={blogPost.id}
      title={blogPost.title}
      date={blogPost.date}
      body={blogPost.body}
      category={blogPost.category}
      author={blogPost.author}
      />}
    </>
  )
}

export default BlogPostContainer