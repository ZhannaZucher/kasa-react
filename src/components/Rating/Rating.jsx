import ActiveStar from "../../assets/star-active.svg"
import InactiveStar from "../../assets/star-inactive.svg"
import "./Rating.css"

export default function Rating ( {scaleValue} ) {
	const range = [1, 2, 3, 4, 5]
	return (
		<div className="acc-owner__rating">
		{
			range.map((rangeElement) => 
			scaleValue >= rangeElement ? 
			(
				<div className="acc-owner__rating-item" key={rangeElement.toString()}>
					<img src={ActiveStar} alt="star-icon" />
				</div>
			)
			: (
				<div className="acc-owner__rating-item" key={rangeElement.toString()}>
					<img src={InactiveStar} alt="star-icon" />
				</div>
				)
			)
		}
		</div>
	)
}