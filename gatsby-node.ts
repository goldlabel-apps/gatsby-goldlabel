const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PwaSeo = path.resolve("src/app/PwaSeo.tsx")


  const allApps = await graphql(`
  query Apps {
    allStrapiApp {
      edges {
        node {
          locale
          title
          description
          appimage {
            alternativeText
            width
            height
            url
          }
          appbody {
            data {
              appbody
            }
          }
          books {
            slug
            title
            description
            keywords
            bookdocs {
              body {
                data
              }
              title
              slug
              keywords
              description
            }
            bookogimg {
              alternativeText
              url
              width
              height
            }
          }
        }
      }
    }
  }
  `)

  const apps = allApps.data.allStrapiApp.edges

  for(let i = 0; i < apps.length; i++){
    const {node} = apps[i]
    // if(i === 0) console.log("app node", node)
    const {locale} = node
    const path = `${locale}`
    createPage({
      path,
      component: PwaSeo,
      context: {
        data: {
          apps,
          special: "home",
          localised: node,
          path,
        },
      },
    })
  }

  createPage({
    path: "/",
    component: PwaSeo,
    context: {
      data: {
        apps,
        special: "home",
        path: "/",
        localised: apps[0].node,
      },
    },
  })

  const allBooks = await graphql(`
  query Books {
    allStrapiBook {
      edges {
        node {
          locale
          title
          description
          slug
          keywords
        }
      }
    }
  }
  `)
  const books = allBooks.data.allStrapiBook.edges
  
  if (books) {
    books.forEach(book => {
      const { slug } = book.node
      if (slug) {
        const path = `/book/${book.node.slug}`
        actions.createPage({
          path,
          component: PwaSeo,
          context: {
            data: {
              apps,
              special: "book",
              path,
              book: book.node,
            },
          },
        })
      }
    })
  }



  createPage({
    path: `${"404"}`,
    component: PwaSeo,
    context: {
      data: {
        special: "404",
        apps,
        instructions: "Route unavailable",
      },
    },
  })
  
}
