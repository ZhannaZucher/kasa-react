import housingData from "../../data/housing.json"
import { useParams, Navigate } from "react-router-dom"

import "./Accomodation.css"


export default function Accommodation() {
	const {id} = useParams()
	const queryData = housingData.find(data => (data.id === id))

	return queryData ? (
		<main id="main-accommodation">
			<div className="gallery-mock">Gallery {/* Ajouter le component Gallery ici */}</div>
			<section className="acc">
				<div className="acc-about__row">
					<div className="acc-about__column">
						<h1 className="acc-about__label">{queryData.title}</h1>
						<h3 className="acc-about__location">{queryData.location}</h3>
						<div className="acc-about__tags">{/* Ajouter le component tag ici */}</div>
					</div>
					<div className="acc-owner__column">
						<h2 className="acc-owner__row">{queryData.host.name}</h2>
						<div className="acc-owner__img">
							<img src={queryData.host.picture} alt={queryData.host.name} />
						</div>
						<div className="acc-owner__rating">{/* Ajouter le component rating ici */}</div>
					</div>
				</div>
				<div className="acc-details">{/* Ajouter les components Collapse ici */}</div>
			</section>
		</main>
	) 
	: (
		<Navigate to="/error" />
	)

}