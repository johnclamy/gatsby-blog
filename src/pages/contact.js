import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

export default function ContactPage () {
  return (
    <Layout>
      <Head title='Contact me' />
      <section>
        <h1>Contact Me</h1>
        <p>The best way to reach out to me is on <a title='LinkedIn' href='https://www.linkedin.com/in/tyrone-james-stewart-2a282930/'>LinkedIn</a></p>
        <p>You can also find me on <a title='Facebook' href='https://www.facebook.com/tyrone.j.stewart'>Facebook</a></p>
      </section>
    </Layout>
  )
}