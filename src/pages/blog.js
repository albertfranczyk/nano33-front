import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import './blog.css'

const BlogPage = ({
  data: {
    allSitePage: { edges },
  },
}) => (
  <Layout>
    <div class="blog-feed">
     {edges.map(edge => (
       <Link key={edge.node.path} to={edge.node.path}>
        <div class="blog-post">
          <div class="blog-title">
            <h2>{edge.node.context.data.header}</h2>
            <p>{edge.node.context.data.excerpt}</p>
          </div>
        <img class="blog-img" src={edge.node.context.data.heroImage[0].url} alt="lorem" />
        </div>
       </Link>))}

    </div>
  </Layout>
)

export const allBlogPosts = graphql`
  query MyQuery {
    allSitePage(filter: {componentChunkName: {eq: "component---src-templates-blog-post-js"}}) {
      edges {
        node {
          path
          context {
            data {
              excerpt
              header
              heroImage {
                url
              }
              id
              slug
            }
          }
        }
      }
    }
  }
`

export default BlogPage