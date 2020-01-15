import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
  button: {
    background: "rgb(176, 178, 181)",
    "&:hover": {
      background: "rgb(129, 129, 130)",
    },
  },
}))

const PostLink = ({ path }) => {
  const classes = useStyles()
  return (
    <Button className={classes.button}>
      <Link to={path}>Read More</Link>
    </Button>
  )
}

export default PostLink
