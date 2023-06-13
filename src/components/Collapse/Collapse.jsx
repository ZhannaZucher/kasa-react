import PropTypes from "prop-types"
import { useState } from "react"
import Arrow from "../../assets/arrow.svg"
import "./Collapse.css"

export default function Collapse({ classModifier, title, children }) {
  const [isOpen, toggleCollapse] = useState(false)

  return (
    <div className={classModifier}>
      <button
        className="collapsible__btn"
        onClick={() => toggleCollapse(!isOpen)}
      >
        <h3 className="collapsible__title">{title}</h3>
        {isOpen ? (
          <img src={Arrow} alt="arrow-up" className="collapsible__arrow-up" />
        ) : (
          <img
            src={Arrow}
            alt="arrow-down"
            className="collapsible__arrow-down"
          />
        )}
      </button>
      {isOpen ? <div className="collapsible__content">{children}</div> : null}
    </div>
  )
}

Collapse.propTypes = {
  classModifier: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
}
