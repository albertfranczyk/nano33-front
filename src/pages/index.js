import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <StaticQuery
    query={graphql`
    query homeQuery {
      craft {
        entries {
          ... on craft_homePage_homePage_Entry {
            heroImage {
              url
            }
            header
            subheader
          }
        }
      }
    }
  `}

  render={({craft: {entries}}) => (
    <Layout>
      <SEO title="Home" />
      <pre>
        {JSON.stringify(entries, null, 2)}
      </pre>
      <Link to="/blog">blog</Link>
    </Layout>
  )}
  />
)

export default IndexPage
