import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <StaticQuery
    query={graphql`
    query homeQuery {
      craft {
        entries(section: "homePage") {
          ... on craft_homePage_homePage_Entry {
            heroImage {
              ... on craft_aws_Asset {
                url(width: 900)
              }
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
      <img fluid src={entries[0].heroImage[0].url} alt="lorem"></img>
      <h1>{entries[0].header}</h1>
      <h2>{entries[0].subheader}</h2>
    </Layout>
  )}
  />
)

export default IndexPage
