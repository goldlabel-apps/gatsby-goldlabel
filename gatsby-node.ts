const path = require(`path`)

exports.createPages = async ({ /*graphql,*/ actions }) => {
  const { createPage } = actions
  const PwaSeo = path.resolve("src/app/PwaSeo.tsx")

  createPage({
    path: "/",
    component: PwaSeo,
    context: {
      data: {
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
        special: "404",
        instructions: "Route unavailable",
      },
    },
  })
  
}
