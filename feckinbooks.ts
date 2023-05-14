const {books} = app.data

  createPage({
    path: "/books",
    component: PWA,
    context: {
      data: {
        special: "books",
        instructions: "List all books",
        instructions1: "List all books",
        app,
        b: books,
      },
    },
    defer: true,
  })

  if (books){
    createPage({
        path: "/book",
        component: PWA,
        context: {
          data: {
            special: "book",
            instructions: "Show Single book",
            app,
          },
        },
        defer: true,
      })
  }


  // if (books){
    // const nodes = books.data
    // console.log("books", books)
    // for(let i=0; i<nodes.length; i++){
    //   const node = nodes[i].node
    //   const { Slug } = node
    //   const path = `/book/${Slug}`
    //   if (Slug) {
    //     createPage({
    //       path,
    //       component: Home,
    //       context: {
    //         data: { 
    //           special: "book",
    //           book: node,
    //           books,
    //         },
    //       },
    //     })
    //   }
    // }
  //}