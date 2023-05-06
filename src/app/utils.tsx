export function makeImgSrc(url: string) {
  return `${
    process.env.STRAPI_API_URL || "https://listingslab-colz.onrender.com"
  }${url}`
}
