/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Footer from "./Footer"

import Header from "./Header"

import { GlobalStyle } from "./Styles/GlobalStyles"

const Layout = ({ children }) => {
 
  return (
    <>
    <GlobalStyle/>
      <Header />
     
        <main>{children}</main>
       <Footer />
    </>
  )
}


export default Layout
