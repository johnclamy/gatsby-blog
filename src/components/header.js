import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

export default function Header () {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const { title, description } = data.site.siteMetadata

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to='/'>{title}</Link>
      </h1>
      <p>{description}</p>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to='/'
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/blog'
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}