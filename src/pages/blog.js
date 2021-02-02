import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

export default function BlogPage () {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const arrData = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1><hr />
      <ul className={blogStyles.posts}>
        {arrData.map((arrItem, i) => {
          const blog = arrItem.node
          return (
            <li key={i} className={blogStyles.post}>
              <header>
                <Link to={`/blog/${blog.slug}`}>
                  <h1>{blog.title}</h1>
                  <p>{blog.publishedDate}</p>
                </Link>
              </header>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}