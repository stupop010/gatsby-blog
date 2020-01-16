import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { makeStyles } from "@material-ui/styles"
import BackgroundImage from "gatsby-background-image"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(() => ({
  header: {
    height: "30rem",
    width: "100%",
  },
  title: {
    fontWeight: 600,
    fontSize: "4.2rem",
    color: "white",
    textShadow: "2px 2px rgb(82, 81, 81)",
  },
  hero: {
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: `1 !important`,
  },
}))

const Header = () => {
  const classes = useStyles()
  const { backgroundImage } = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    `linear-gradient(rgba(36, 36, 36, 0.5), rgba(13, 13, 13, 0.5))`,
    backgroundImage.childImageSharp.fluid,
  ]

  return (
    <header className={classes.header}>
      <BackgroundImage
        Tag="div"
        fluid={backgroundFluidImageStack}
        className={classes.hero}
      >
        <Typography variant="h1" className={classes.title}>
          Restaurant Review Blog!
        </Typography>
      </BackgroundImage>
    </header>
  )
}

export default Header
