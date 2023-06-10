import housingData from "../../data/housing.json"
import { useParams, Navigate } from "react-router-dom"
import Tag from "../../components/Tag/Tag"

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
						<div className="acc-about__tags">{
							queryData.tags.map((tag, index) => (
								<Tag 
									key={index}
									content={tag}
								/>
							))
						}</div>
					</div>
					<div className="acc-owner__column">
						<div className="acc-owner__row">
							<h2 className="acc-owner__name">{queryData.host.name}</h2>
							<div className="acc-owner__img">
								<img src={queryData.host.picture} alt={queryData.host.name} />
							</div>
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