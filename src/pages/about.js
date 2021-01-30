import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default function AboutPage () {
  return (
    <Layout>
      <div>
        <h1>About Me</h1><hr />
        <section>
          <h2>First Steps</h2>
          <p>
            Tyrone grew up in Auckland, New Zealand. Before moving to London in the UK where he studied filmmaking, graduating from a film course called Panico run by the filmmakers behind the Monty Python Films, Bob Doyle and Julian Doyle. Focusing on all aspects of the film industry. Following this he took several classes at London Film Academy gaining more experience in camera, production and scriptwriting/directing.<br />
            In the following years Tyrone also worked in the Computer, Publishing and Gaming & Casinos industries but always had a love of the creative arts, narrative storytelling and most of all films.
          </p>
        </section>
        <section>
          <h2>Working career</h2>
          <p>As a freelance filmmaker in the UK, Tyrone has gained years of experience as a film Production Assistant, having worked in different capacities on short and feature length films, corporate videos, television ads and media related projects. He has also worked independently by creating his own short films from pre-production through to post-production. Releasing online and various film festivals.</p>
        </section>
        <section>
          <h2>The future...</h2>
          <p>Having moved back to New Zealand, Tyrone has in the past couple of years taken further film education courses at Yoobee Colleges - City Campus and is now pursing a career move into post-production at South Seas Film School.</p>
        </section>
        <section>
          <p>Like what you see? <Link to='/contact'>Offer me a job</Link>.</p>
        </section>
      </div>
    </Layout>
  )
}