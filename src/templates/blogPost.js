import React from 'react'
import Layout from '../components/layout'

const BlogPost = ({ pageContext: { data }}) => (
  <Layout>
    <img src={data.heroImage[0].url} alt="lorem" />
    <h1>{data.header}</h1>
    <h5>{data.excerpt}</h5>

  </Layout>
)

export default BlogPost