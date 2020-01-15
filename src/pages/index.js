import React from "react"
import Box from "@material-ui/core/Box"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard"

const useStyles = makeStyles(() => ({
  blogWrapper: {
    padding: "2rem 4rem",
  },
  blog: {
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridTemplateAreas: `
      'blog-1 blog-2'
      'blog-3 blog-3'
      `,
    gridGap: "1rem",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              picture {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              path
              date
              title
              summary
              author
            }
          }
        }
      }
    }
  `)

  const splitRemark = allMarkdownRemark.edges.splice(0, 3)
  return (
    <Layout>
      <SEO title="Home" />
      <Box className={classes.blogWrapper}>
        {allMarkdownRemark && (
          <Box className={classes.blog}>
            <BlogCard
              gridName="blog-1"
              blog={splitRemark[0].node.frontmatter}
            />
            <BlogCard
              gridName="blog-2"
              blog={splitRemark[1].node.frontmatter}
            />
            <BlogCard
              gridName="blog-3"
              blog={splitRemark[2].node.frontmatter}
            />
          </Box>
        )}
      </Box>
    </Layout>
  )
}

export default IndexPage
