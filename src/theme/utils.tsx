export function makeImgSrc(url: string) {
  return `${"http://localhost:8000"}${url}`
  // return `${
  //   process.env.STRAPI_API_URL || "https://listingslab-colz.onrender.com"
  // }${url}`
}
