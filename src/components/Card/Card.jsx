import PropTypes from "prop-types"
import "./Card.css"

export default function Card({ label, picture }) {
  return (
    <article className="accommodation-card">
      <div className="accommodation-card__view">
        <img src={picture} alt="logement" />
      </div>
      <h2 className="accommodation-card__label">{label}</h2>
    </article>
  )
}

Card.propTypes = {
  label: PropTypes.string,
  picture: PropTypes.string,
}
