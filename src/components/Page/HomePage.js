import React from "react"
import Box from "@material-ui/core/Box"
import BlogCard from "../BlogCard"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  blogWrapper: {
    padding: "2rem 4rem",
  },
  blog: {
    margin: "auto",
  },
}))

const HomePage = ({ blogs }) => {
  const classes = useStyles()
  return (
    <Box className={classes.blogWrapper}>
      <Box className={classes.blog}>
        {blogs.map(blog => (
          <BlogCard blog={blog.node.frontmatter} />
        ))}
      </Box>
    </Box>
  )
}

export default HomePage
