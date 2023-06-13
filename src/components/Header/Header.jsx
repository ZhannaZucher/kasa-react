import { NavLink, Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
