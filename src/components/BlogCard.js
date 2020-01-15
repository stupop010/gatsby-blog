import React from "react"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import BackgroundImage from "gatsby-background-image"
import PostLink from "./PostLink"

const useStyles = makeStyles(() => ({
  blogPost: {
    width: "100%",
    color: "white",
  },
  blogThumbnail: {
    minHeight: "15rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "auto",
  },
  blogTitle: {
    fontSize: "1.7rem",
    fontWeight: 700,
  },
  blogSummary: {
    fontSize: "0.9rem",
    padding: "1rem",
  },
}))

const BlogCard = ({ gridName, blog }) => {
  const classes = useStyles()
  console.log(blog)

  const image = [
    `linear-gradient(rgba(36, 36, 36, 0.6), rgba(13, 13, 13, 0.8))`,
    blog.picture.childImageSharp.fluid,
  ]

  return (
    <Paper className={classes.blogPost} style={{ gridArea: gridName }}>
      <BackgroundImage
        Tag="div"
        fluid={image}
        className={classes.blogThumbnail}
      >
        <Typography variant="h3" className={classes.blogTitle}>
          {blog.title}
        </Typography>
        <Typography className={classes.blogSummary}>{blog.summary}</Typography>
        <PostLink path={blog.path} />
      </BackgroundImage>
    </Paper>
  )
}

export default BlogCard
