import React from "react"
import { StaticQuery, graphql } from "gatsby"


const BlogPage = () => (

  <StaticQuery
    query={graphql`
    query blogQuery {
      craft {
        entry {
          ... on craft_blog_blog_Entry {
            id
            title
            excerpt
            article
          }
        }
      }
    }
  `}

  render={({craft: {entry}}) => (
    <h3>{entry.excerpt}</h3>
    // <div>{entry.article}</div>
    // <pre>
    //   {JSON.stringify(entry, null, 2)}
    // </pre>
  )}
  />
)

export default BlogPage