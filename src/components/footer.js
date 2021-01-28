import React from 'react'

import footerStyles from './footer.module.scss'

export default function Footer () {
  return (
    <footer className={footerStyles.footer}>
      <p>&copy; {new Date().getFullYear()} Tyrone James Stewart, All rights reserved.</p>
    </footer>
  )
}