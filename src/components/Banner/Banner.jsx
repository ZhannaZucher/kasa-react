import PropTypes from "prop-types"
import "./Banner.css"

export default function Banner({ home, children }) {
  return home ? (
    <div className="banner banner--home">{children}</div>
  ) : (
    <div className="banner">{children}</div>
  )
}

Banner.propTypes = {
  home: PropTypes.bool,
  children: PropTypes.element,
}
