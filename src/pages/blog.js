import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

export default function BlogPage () {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              data(fromNow: false)
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const arrData = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1><hr />
      <ul className={blogStyles.posts}>
        {arrData.map((arrItem, i) => {
          const blog = arrItem.node
          return (
            <li key={i} className={blogStyles.post}>
              <header>
                <Link to={`/blog/${blog.fields.slug}`}>
                  <h1>{blog.frontmatter.title}</h1>
                  <p>{blog.frontmatter.data}</p>
                </Link>
              </header>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}