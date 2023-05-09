const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Disconnected = path.resolve("src/app/Disconnected.tsx")
  const Home = path.resolve("src/app/Home.tsx")

  // const books = await graphql(`
  // query Books {
  //   allStrapiBook(filter: {locale: {eq: "en"}}) {
  //     edges {
  //       node {
  //         Title
  //         Description
  //         Slug
  //         id
  //         localizations {
  //           data {
  //             attributes {
  //               locale
  //               Description
  //               Slug
  //               Title
  //             }
  //           }
  //         }
  //         Documents {
  //           locale
  //           Title
  //           Description
  //           Slug
  //           id
  //           Body {
  //             data
  //           }
  //         }
  //         Image {
  //           alternativeText
  //           width
  //           height
  //           url
  //         }
  //       }
  //     }
  //   }
  // }
  // `)
  
  createPage({
    path: "/",
    component: Home,
    context: {
      data: {
        special: "home",
        instructions: "Connected to Colz, bro",
        // books: books ? books.data.allStrapiBook.edges : null,
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
