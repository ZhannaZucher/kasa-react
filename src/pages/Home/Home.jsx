import Banner from "../../components/Banner/Banner"
import BannerImg from "../../assets/img-home.jpg"



export default function Home() {
	return (
		<Banner>
			<img className="banner__img" src={BannerImg} alt="rocks" />
			<h1 className="banner__title">Chez vous, partout et ailleurs</h1>
		</Banner>
	)
}

