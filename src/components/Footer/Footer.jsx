import Logo from "../../assets/logo-footer.svg"
import "./Footer.css"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__logo">
				<img src={Logo} alt="logo" />
			</div>
			<p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}