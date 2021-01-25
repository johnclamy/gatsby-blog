import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default function AboutPage () {
  return (
    <Layout>
      <div>
        <h1>About Me</h1>
        <section>
          <h2>First Steps</h2>
          <p>In 2002, Tyrone got into film making by the way of writing and directing short films. The first was titled “Long time no see”. This was the story about two friends meeting in a pub. The short entered various festivals. A T-shirt was provided to Tyrone in one of the festivals and he has kept it as a trophy till this very day. With a clear view in pursuing a career in films, he went back to film school, this time in London, where he graduated on a Panico film course. In early 2004, he wrote and directed the short film “The Stalker”. The story was an idea Tyrone had back in 1992 at film school. This film also sparked the announcement of the Jemsea Films Ltd Company.</p>
        </section>
        <section>
          <p>Like what you see? <Link to='/contact'>Offer me a job</Link>.</p>
        </section>
      </div>
    </Layout>
  )
}