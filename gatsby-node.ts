const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const Home = path.resolve(`src/app/Home.tsx`)
  createPage({
    path: "/",
    component: Home,
    context: {
      data: {
        special: "home",
        instructions: "Show everything, bro.",
      },
    },
    defer: true,
  })

  createPage({
    path: "/404",
    component: Home,
    context: {
      data: {
        special: "home",
        instructions: "Show everything, bro.",
      },
    },
    defer: true,
  })

  // const BooksTemplate = path.resolve(`src/app/BooksTemplate.tsx`)
  // const BookTemplate = path.resolve(`src/app/BookTemplate.tsx`)
  
  const allBooks = await graphql(`
  query Books {
    allStrapiBook {
      edges {
        node {
          id
          locale
          Title
          Slug
          Description
          Image {
            alternativeText
            width
            url
            height
            formats {
              large {
                height
                url
                width
              }
              medium {
                height
                url
                width
              }
              small {
                height
                url
                width
              }
              thumbnail {
                height
                url
                width
              }
            }
          }
          Documents {
            id
            Slug
            Title
            Description
            locale
            Keywords
            Body {
              data
            }
          }
        }
      }
    }
  }
  `)
  const books = allBooks.data.allStrapiBook.edges
  if (books) {
    createPage({
      path: "/books",
      component: Home,
      context: {
        data: {
          special: "books",
          instructions: "Show all the books",
        },
      },
      defer: true,
    })
    books.forEach(book => {   
      const { Slug } = book.node
      const path = `/book/${Slug}`
      if (Slug) {
        createPage({
          path,
          component: Home,
          context: {
            data: { ...book.node },
          },
        })
      }
    })
  }
}
