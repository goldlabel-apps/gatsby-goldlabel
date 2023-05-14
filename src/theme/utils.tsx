export function makeImgSrc(url: string) {
  return `${"https://strapi-colz.onrender.com"}${url}`
  // return `${
  //   process.env.STRAPI_API_URL || "https://listingslab-colz.onrender.com"
  // }${url}`
}
