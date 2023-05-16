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
        }
      }
    }
  }
  `)
  const apps = allApps.data.allStrapiApp.edges

  for(let i = 0; i < apps.length; i++){
    const {node} = apps[i]
    if(i === 0) console.log("app node", node)
    const {locale} = node
    const path = `${locale}`
    createPage({
      path,
      component: PwaSeo,
      context: {
        data: {
          special: "app",
          path,
          instructions: "localise",
          apps,
        },
      },
    })
  }

  createPage({
    path: "/",
    component: PwaSeo,
    context: {
      data: {
        special: "home",
        instructions: "Velcome, velcome",
        apps,
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
          bookimage {
            alternativeText
            width
            height
            url
          }
        }
      }
    }
  }
  `)
  const books = allBooks.data.allStrapiBook.edges
  
  if (books) {
    books.forEach(book => {
      // console.log("FFS", book.node.slug)
      const { slug } = book.node
      if (slug) {
        const path = `/book/${book.node.slug}`
        actions.createPage({
          path,
          component: PwaSeo,
          context: {
            data: {
              special: "book",
              apps,
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
