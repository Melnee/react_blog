import BlogPostForm from './BlogPostForm';
import { blogPostProps } from './Types';
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { blogPosts } from '../api/TempDB'

const BlogPostUpdate = () => {
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
    {blogPost && <BlogPostForm
      update
      id={blogPost.id}
      propTitle={blogPost.title}
      propDate={blogPost.date}
      propBody={blogPost.body}
      propCategory={blogPost.category}
      propAuthor={blogPost.author}
    />}
    </>
  )
}

export default BlogPostUpdate