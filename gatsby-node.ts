const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Disconnected = path.resolve("src/app/Disconnected.tsx")

  createPage({
    path: "/",
    component: Disconnected,
    context: {
      data: {
        special: "disconnected",
        instructions: "Connect Gatsby to Strapi, bro",
      },
    },
    defer: true,
  })

  createPage({
    path: "/404",
    component: Disconnected,
    context: {
      data: {
        special: "404",
        instructions: "Route not there, bro.",
      },
    },
    defer: true,
  })
}
