const path = require(`path`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const PwaSeo = path.resolve("src/app/PwaSeo.tsx")

  createPage({
    path: "/",
    component: PwaSeo,
    context: {
      data: {
        special: "home",
        instructions: "Connected to Colz, bro",
      },
    },
    defer: true,
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
    defer: true,
  })
  
}
