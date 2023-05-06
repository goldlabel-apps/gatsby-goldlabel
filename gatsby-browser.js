exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("Gatsby updated")
  if (answer === true) {
    window.location.reload()
  }
}
