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
        demo,
        special: "home",
        path: "/",
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
        path: "/",
      },
    },
  })


  createPage({
    path: `${"404"}`,
    component: PwaSeo,
    context: {
      data: {
        demo,
        special: "404",
        instructions: "Route unavailable",
        path: "/404",
      },
    },
  })
  
}
