const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)

  const postQuery = await graphql(`
    query MyQuery {
      craft {
        entries(section: "blog") {
          ... on craft_blog_blog_Entry {
            id
            header
            excerpt
            heroImage {
              url
            }
            article
            slug
          }
        }
      }
    } 
  `)

  postQuery.data.craft.entries.forEach(post => {
    createPage({
      path: post.slug,
      component: blogPostTemplate,
      context: {
        data: post
      }
    })
    
  });
  
}