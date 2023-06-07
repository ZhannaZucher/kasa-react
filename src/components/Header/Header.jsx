import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import "./Header.css"

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img src={Logo} alt="logo" />
			</div>
			<nav className="header__nav">
				<NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Accueil</NavLink>
				<NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>A Propos</NavLink>
			</nav>
		</header>
	)
}