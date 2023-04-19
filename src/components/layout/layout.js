import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer/footer"
import Header from "../header/header"

const Layout = ({ children, footer }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <main>{children}</main>
      {footer && <Footer />}
    </div>
  )
}

export default Layout
