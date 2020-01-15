/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/styles"

import Header from "./header"
import "./layout.css"

const useStyles = makeStyles(() => ({
  container: {
    margin: `-150px auto`,
    maxWidth: "90%",
    paddingTop: 0,
    background: "white",
    borderRadius: "6px",
  },
  content: {
    height: "100%",
    width: "100%",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Box component="main" className={classes.container}>
        <Box className={classes.content}>{children}</Box>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
