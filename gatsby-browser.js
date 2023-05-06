// const React = require("react")
// const { Pwa } = require("./src/pwa/")

// exports.wrapPageElement = ({ element, props }) => {
//   return <Pwa data={{ ...props }}>{element}</Pwa>
// }

exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("Listingslab updated")
  if (answer === true) {
    window.location.reload()
  }
}
