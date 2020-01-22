import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import PostsList from "../components/PostsList"
import * as S from "../components/PostsListWrapper/styled"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <S.PostsListWrapper>
      <S.PostsListWrapperTitle>Articles</S.PostsListWrapperTitle>
      <PostsList posts={data.allMarkdownRemark.edges} />
    </S.PostsListWrapper>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            categories
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage