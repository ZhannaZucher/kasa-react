import PropTypes from 'prop-types'
import "./Tag.css"

export default function Tag ({content}) {
	return (
	<div className="tag">
		<p>{content}</p>
	</div>
	)
}

Tag.propTypes = {
	content: PropTypes.string,
}