import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "3rem",
    textAlign: "center",
  },
  blogPost: {
    width: "80%",
    margin: "auto",
    minHeight: "20rem",
    padding: "2rem 0",
  },
  blogAuthor: {
    textAlign: "center",
    opacity: 0.7,
    padding: "0.5rem 0",
  },
  blogContent: {
    padding: "2.5rem",
  },
}))

const BlogPage = ({ blog }) => {
  const classes = useStyles()
  const { html, frontmatter } = blog

  return (
    <Box className={classes.blogPost}>
      <Typography variant="h2" className={classes.title}>
        {frontmatter.title}
      </Typography>
      <Typography className={classes.blogAuthor}>
        Published by {frontmatter.author} on {frontmatter.date}
      </Typography>
      <div
        className={classes.blogContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  )
}

export default BlogPage
