import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        data(fromNow: false)
      }
      html
    }
  }
`

export default function Blog (props) {
  const { title, data } = props.data.markdownRemark.frontmatter
  const { html } = props.data.markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{data}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}