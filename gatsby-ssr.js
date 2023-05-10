const React = require("react")

exports.onRenderBody = ({
  setPreBodyComponents
}) => {
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img src="/images/logo.png" alt="logo" style={{"height": "calc(3.23625vw + 77.86408px)"}} />
      <div className="preloader_animation">
        <h1>
            Loading Goldlabel
        </h1>
      </div>
    </div>
  ])
}