import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPage from "../components/Page/BlogPage"

const blogTemplate = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <BlogPage blog={markdownRemark} />
    </Layout>
  )
}

export default blogTemplate
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`
