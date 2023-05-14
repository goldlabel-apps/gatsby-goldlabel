const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PWA = path.resolve("src/app/PWA.tsx")
  
  let app = await graphql(`
  query AppGQL {
    allStrapiApp(filter: {slug: {eq: "listingslab"}}) {
      edges {
        node {
          locale
          title
          description
          canonical
          keywords
          appicon {
            alternativeText
            width
            height
            url
          }
          appimage {
            alternativeText
            width
            height
            url
          }
          books {
            title
            description
            keywords
            slug,
            bookimage {
              alternativeText
              width
              height
              url
            }
            docs {
              title
              description
              keywords
              slug
              body {
                data
              }
            }
          }
        }
      }
    }
  }
  `)
  if (!app) app = {error:"AppGQL error."}
  
  createPage({
    path: "/",
    component: PWA,
    context: {
      data: {
        special: "home",
        instructions: "Connected to Colz, bro",
        app,
      },
    },
    defer: true,
  })

  createPage({
    path: "/404",
    component: PWA,
    context: {
      data: {
        special: "404",
        instructions: "Route not there, bro.",
        app,
      },
    },
    defer: true,
  })

  
}
