const React = require("react")

exports.onRenderBody = ({
  setPreBodyComponents
}) => {
  setPreBodyComponents([
    <div id="preloader">
      <div className="preloader_animation">
        <h1>
            Loading Goldlabel
        </h1>
      </div>
    </div>
  ])
}