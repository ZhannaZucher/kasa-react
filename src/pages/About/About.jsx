import Banner from "../../components/Banner/Banner"
import BannerImg from "../../assets/img-about.jpg"

export default function Home() {
	return (
		<Banner>
			<img className="banner__img" src={BannerImg} alt="rocks" />
		</Banner>
	)
}