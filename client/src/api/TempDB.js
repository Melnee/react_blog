import moment from "moment"

export const blogPosts = [
  {
    id: 1,
    date: moment(),
    title: "First Blog Post",
    body: "Lorem Ipsum first post",
    category: "Sports",
    author: "Me myself and I",
    slug: "first_post"
  },
  {
    id: 2,
    date: moment(),
    title: "Second Blog Post",
    body: "Lorem Ipsum second post",
    category: "Outdoor",
    author: "Me myself and I",
    slug: "second_post"
  },
  {
    id: 3,
    date: moment(),
    title: "Third Blog Post",
    body: "Lorem Ipsum third post",
    category: "News",
    author: "Me myself and I",
    slug: "third_post"
  }
]

export const blogPostCategories = [
  {
    text: "News",
    value: "News"
  },
  {
    text: "Sports",
    value: "Sports"
  },
  {
    text: "Fashion",
    value: "Fashion"
  },
  {
    text: "Outdoor",
    value: "Outdoor"
  },
  {
    text: "Pet",
    value: "Pet"
  }
]
