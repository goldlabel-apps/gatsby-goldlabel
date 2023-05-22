const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PwaSeo = path.resolve("src/app/PwaSeo.tsx")

  const demoData = await graphql(`
    query Demo {
      strapiDemo {
        title
        locale
        ogImage {
          url
        }
      }
    }
  `)
  let demo: any = {}
  if (demoData) demo = demoData.data.strapiDemo

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
    path: `${"404"}`,
    component: PwaSeo,
    context: {
      data: {
        demo,
        special: "404",
        instructions: "Route unavailable",
      },
    },
  })
  
}
