const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PWA = path.resolve("src/app/PWA.tsx")
  
  // let app = await graphql(`
  // query AppGQL {
  //   allStrapiApp(filter: {slug: {eq: "listingslab"}}) {
  //     edges {
  //       node {
  //         locale
  //         title
  //         description
  //         canonical
  //         slug
  //       }
  //     }
  //   }
  // }
  // `)
  // if (!app) app = {error:"AppGQL error."}
  
  createPage({
    path: "/",
    component: PWA,
    context: {
      data: {
        special: "home",
        instructions: "Connected to Colz, bro",
        // app,
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
        // app,
      },
    },
    defer: true,
  })

  // if (books){
  //   const nodes = books.data.allStrapiBook.edges
  //   for(let i=0; i<nodes.length; i++){
  //     const node = nodes[i].node
  //     const { Slug } = node
  //     const path = `/book/${Slug}`
  //     if (Slug) {
  //       createPage({
  //         path,
  //         component: Home,
  //         context: {
  //           data: { 
  //             special: "book",
  //             book: node,
  //             books,
  //           },
  //         },
  //       })
  //     }
  //   }
  // }
}
