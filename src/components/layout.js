import React from 'react'

import Header from './header'
import Footer from './footer'
import layoutStyles from './layout.module.scss'
import '../styles/index.scss'

export default function Layout ({ children }) {
  return (
    <div className={layoutStyles.container}>
      <section className={layoutStyles.content}>
        <Header />
        {children}
      </section>      
      <Footer />
    </div>
  )
}