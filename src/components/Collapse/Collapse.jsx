import PropTypes from 'prop-types'
import { useState } from "react"
import Arrow from "../../assets/arrow-down.svg"
import "./Collapse.css"

export default function Collapse ({classModifier, title, content, typeOfContent}) {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={classModifier}>
			<button className="collapsible__btn" onClick={() => setIsOpen(!isOpen)}>
				<h3 className="collapsible__title">{title}</h3>
				{ isOpen ? 
					(<img src={Arrow} alt="arrow-up" className="collapsible__arrow-up" />)
					: (<img src={Arrow} alt="arrow-down" className="collapsible__arrow-down" />) 
					}
			</button>
			{ isOpen ? 
			<div className="collapsible__content">
				{ typeOfContent === "text" ? 
					(<p>{content}</p>)
					: (<ul> 
						{
							content.map((element, index) => ( 
							<li key={index}>{element}</li>
							))
						} 
					</ul>)
					}
			</div> 
			: null }
		</div>
	)
}

Collapse.propTypes = {
	classModifier: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	typeOfContent: PropTypes.string,
}