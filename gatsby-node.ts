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
        }
      }
    }
  }
  `)
  let demo: any = {}
  if (demoData) demo = demoData.data.allStrapiDemo.edges

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
        locale: "zh",
        demo,
        special: "home",
        path: "/zh",
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
  
}
