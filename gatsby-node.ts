const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PwaSeo = path.resolve("src/app/PwaSeo.tsx")

  const demoData = await graphql(`
  query Demo {
    allStrapiDemo {
      edges {
        node {
          title
          description
          keywords
          locale
          body {
            data {
              body
            }
          }
          ogImage {
            url
            alternativeText
            width
            height
          }
        }
      }
    }
  }
  `)
  let demo: any = {}
  if (demoData) demo = demoData.data.allStrapiDemo.edges

  const allPages = await graphql(`
  query Pages {
    allStrapiPage {
      edges {
        node {
          locale
          title
          path
        }
      }
    }
  }
  `)
  const pages = allPages.data.allStrapiPage.edges
  
  for(let i = 0; i < pages.length; i++){
    const {node} = pages[i]
    const path = `${node.path}/${node.locale}`

    if (node.locale === "en"){
      createPage({
        path: node.path,
        component: PwaSeo,
        context: {
          data: {
            locale: "en",
            special: "page",
            page: node,
            demo,
            path: node.path,
          },
        },
      })
    }
    createPage({
      path,
      component: PwaSeo,
      context: {
        data: {
          locale: node.locale,
          special: "page",
          page: node,
          demo,
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
        locale: "en",
        demo,
        special: "home",
        path: "/",
      },
    },
  })

  createPage({
    path: "/en",
    component: PwaSeo,
    context: {
      data: {
        locale: "en",
        demo,
        special: "home",
        path: "/en",
      },
    },
  })

  createPage({
    path: "/zh",
    component: PwaSeo,
    context: {
      data: {
        locale: "zh",
        demo,
        special: "home",
        path: "/zh",
      },
    },
  })

  createPage({
    path: "/sv",
    component: PwaSeo,
    context: {
      data: {
        locale: "sv",
        demo,
        special: "home",
        path: "/sv",
      },
    },
  })


  createPage({
    path: `${"404"}`,
    component: PwaSeo,
    context: {
      data: {
        demo,
        locale: "en",
        special: "404",
        instructions: "Route unavailable",
        path: "/404",
      },
    },
  })

  createPage({
    path: `${"undefined"}`,
    component: PwaSeo,
    context: {
      data: {
        demo,
        locale: "en",
        special: "404",
        instructions: "Route unavailable",
        path: "/404",
      },
    },
  })
  
}
