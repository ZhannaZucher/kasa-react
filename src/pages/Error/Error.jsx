import { NavLink } from "react-router-dom"
import "./Error.css"

export default function Header() {
  return (
    <div id="error-content">
      <h1 className="error__title">404</h1>
      <h2 className="error__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  )
}
