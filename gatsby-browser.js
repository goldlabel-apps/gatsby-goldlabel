exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("Goldlabel updated")
  if (answer === true) {
    window.location.reload()
  }
}
