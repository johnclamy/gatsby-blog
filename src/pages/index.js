import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function IndexPage () {
  return (
    <Layout>
      <Head title='Home' />
      <section>
        <h1>Hello,</h1>
        <h2>I'm Tyrone, a film editor living in beautiful Auckland, New Zealand.</h2>
        <p>Need a film editor? <Link to='/contact'>Contact me</Link>.</p>
      </section>
    </Layout>
  )
}
