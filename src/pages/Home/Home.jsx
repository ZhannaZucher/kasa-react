import dataHousing from "../../data/housing.json"
import { Link } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import BannerImg from "../../assets/img-home.jpg"
import Card from "../../components/Card/Card"
import "./Home.css"



export default function Home() {
	return (
		<main id="main-home">
			<Banner home="true">
				<img className="banner__img" src={BannerImg} alt="rocks" />
				<h1 className="banner__title">Chez vous, partout et ailleurs</h1>
			</Banner>
			<section className="housing-content">
				{
					dataHousing.map((house) => (
						<Link key={house.id} to={`/accommodation/${house.id}`}>
							<Card 
								label={house.title}
								picture={house.cover}
							/>
						</Link>
					))
				}
			</section>
		</main>

	)
}

